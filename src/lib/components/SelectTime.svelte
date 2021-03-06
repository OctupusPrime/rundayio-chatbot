<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import dayjs from '../config/dayjs'
    import getUsetTime from '../api/getUserTime'

    import BaseButton from './BaseButton.svelte';

    const dispatch = createEventDispatcher();

    const time = {
        "name": "Pulse Wave",
        "timezone": "GMT-0700 (America/Los_Angeles)",
        "avatar": "https://runday.s3.us-west-2.amazonaws.com/userProfilePicture/dev@pulsewavelabs-com.gif",
        "availability": [
            {
            "day_of_week": 0,
            "start_seconds": 0,
            "end_seconds": 0
            },
            {
            "day_of_week": 1,
            "start_seconds": 21600,
            "end_seconds": 50400
            },  
            {
            "day_of_week": 2,
            "start_seconds": 21600,
            "end_seconds": 50400
            },
            {
            "day_of_week": 3,
            "start_seconds": 21600,
            "end_seconds": 50400
            },
            {
            "day_of_week": 4,
            "start_seconds": 21600,
            "end_seconds": 50400
            },
            {
            "day_of_week": 5,
            "start_seconds": 21600,
            "end_seconds": 50400
            },
            {
            "day_of_week": 6,
            "start_seconds": 0,
            "end_seconds": 0
            }
        ]}


    const generateDates = () => {
        let accDate = dayjs()
        let res = []
        for (let i = 0; i < 7; i++) {
            res.push({
                title: accDate.format('ddd'),
                day: accDate.format('DD'),
                value: accDate.day()
            })
            accDate = accDate.add(1, 'day')
        }

        return res
    }

    interface PickDate {
        title: string,
        day: string,
        value: number
    }

    type HoursArr =  { [key: number]: string[] }

    const generateTime = () => {
        let res: string[][] = []
        const startOfDay = dayjs().startOf('day')

        for (const { 
                start_seconds, 
                end_seconds } of time.availability) {

            res.push([])

            if (end_seconds > start_seconds) {
                const endTime = dayjs(startOfDay.valueOf() + end_seconds * 1000)
                let startTime = dayjs(startOfDay.valueOf() + start_seconds * 1000)
                
                while (endTime.valueOf() >= startTime.valueOf()) {
                    res[res.length - 1].push(startTime.format('h A'))

                    startTime = startTime.add(1, 'hour')
                }
            }
        }
        return Object.assign({}, res)
    }

    let pickDateArr: PickDate[] = []

    let hoursArr: HoursArr = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    }

    let selectedDate = {
        dateIndex: 0,
        selectedDay: 0,
        selectedTime: ''
    }
    onMount(() => {
        pickDateArr = generateDates()
        selectedDate.selectedDay = pickDateArr[0].value

        hoursArr = generateTime()
        // getUsetTime()
    })

    let isValid = true

    $: {
        if (selectedDate.dateIndex + 1 && selectedDate.selectedTime && hoursArr[selectedDate.selectedDay].length)
            isValid = true
        else
            isValid = false
    }

    const submitTime = () => {
        let res = dayjs().startOf('day').add(selectedDate.dateIndex, 'day')
        dispatch('submit',
            res.add(Number(selectedDate.selectedTime.split(' ')[0]), 'hours')
        )
    }
</script>

<div class="w-full p-3">
    <h2 class="font-semibold mb-3">
        {dayjs().format('MMM')}
    </h2>
    <div class="grid grid-cols-7 gap-1">
        {#each pickDateArr as { title, day, value }, i}
            <button class="rounded-full text-center py-2.5 font-semibold transition-colors" 
                class:selected-day={value === selectedDate.selectedDay}
                on:click={() => {
                    selectedDate.selectedDay = value
                    selectedDate.dateIndex = i
                }}>
                <p class="text-xs mb-1 text-gray-900 uppercase"> 
                    {title}
                </p>
                <div class="h-6 w-6 rounded-full mx-auto">
                    <p class="text-xs pt-[3px] text-black">
                        {day}
                    </p>
                </div>
            </button>        
        {/each}
    </div>
    <h2 class="font-semibold my-3">
        🕒 Select Time:
    </h2>
    <div class="grid grid-cols-3 gap-2.5">
        {#if hoursArr[selectedDate.selectedDay].length}
            {#each hoursArr[selectedDate.selectedDay] as item}
                <button class="text-center font-semibold border-2 bg-white border-gray-300 rounded-md py-2 transition-colors"
                    class:selected-time={item === selectedDate.selectedTime}
                    on:click={() => selectedDate.selectedTime = item}>
                    {item}  
                </button>
            {/each}
            {:else}
            <p class="text-center col-span-3"> 
                No time today
            </p>
        {/if}
    </div>
    <BaseButton title="Submit time"
        styles="mt-3"
        isDisabled={!isValid}
        on:click={submitTime}/>
</div>

<style>
    .selected-day {
        @apply bg-[#5BA2FF] text-white;
    }
    .selected-day p {
        @apply text-white;
    }
    .selected-day > div {
        @apply bg-[#7AB4FF];
    }

    .selected-time {
        @apply bg-[#CCE2FF] border-[#5BA2FF];
    } 
</style>