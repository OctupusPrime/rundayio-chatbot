<script lang="ts">
    import { tick } from "svelte";
    import { createEventDispatcher } from 'svelte';

    import SelectTime from './SelectTime.svelte'
    import BaseButton from './BaseButton.svelte';

    import type { Messages } from '../types/messages'

    export let messages:Messages[] = []
    export let isLoading = false
    export let isChooseTime = false

    const dispatch = createEventDispatcher();

    let container: HTMLElement

    const scrollToBottom = async () => {
        if (container) {
            await tick()
            container.scrollTop = container.scrollHeight
        }
    }

    $: {
        if (messages)
            scrollToBottom()
    }

    const commandClicked = (val: string) => {
        dispatch('command-clicked', '/' + val.toLowerCase().replace(/\s/g, '-'))
    }
</script>

<div class="px-[10px] py-[25px] overflow-y-auto h-full scroll-smooth" bind:this={container}>
    {#each messages as { blocks, isUser }}
        <div class="flex gap-1.5 mb-[10px] last:mb-0" class:justify-end={isUser}>
            {#if !isUser}
                <img class="h-[30px] w-[30px] overflow-hidden rounded-full bg-[#D2E0F1] shrink-0" 
                    src="/assets/runday-logo.png" 
                    alt="runday.io avatar">
            {/if}
            <div class="flex flex-col gap-3">
                {#each blocks as { message, commands, link, button }}
                    {#if message}
                        <p class="px-[12px] py-[10px] bg-[#E8E8E8] rounded-lg rounded-tl-none text-sm font-medium" 
                            class:user-message={isUser}
                            class:text-blue-600={message[0] === '/'}>
                            {@html message}
                        </p>
                    {/if}
                    {#if commands && commands[0]}
                        <div class="flex flex-wrap gap-2 justify-center">
                            {#each commands as value}
                                <button on:click={() => commandClicked(value)}
                                    class="border-2 border-blue-400 rounded-full px-2.5 py-1 bg-blue-100 font-semibold text-blue-800">
                                    {value}
                                </button>
                            {/each}
                        </div>   
                    {/if}      
                    {#if link}
                        <a href={link.href} class="w-full text-center font-semibold text-lg underline underline-offset-4 text-blue-800">
                            {link.title}
                        </a>
                    {/if}   
                    {#if button}
                        <BaseButton title={button.title}
                            on:click={button.callback}/>
                    {/if}
                {/each}
            </div>
        </div>   
    {/each}

    {#if isLoading}
        <div class="flex gap-1.5 mb-[10px] last:mb-0"> 
            <img class="h-[30px] w-[30px] overflow-hidden rounded-full bg-[#D2E0F1] shrink-0" 
                src="/assets/runday-logo.png" 
                alt="runday.io avatar">

            <div class="w-[150px] h-[40px] bg-[#E8E8E8] rounded-lg rounded-tl-none text-sm relative">
                <span class="absolute inset-0 grid place-items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="animate-spin h-4 w-4">
                        <path d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"/>
                    </svg>
                </span>
            </div>   
        </div>
    {/if}

    {#if isChooseTime}
        <SelectTime on:submit={({detail}) => dispatch('submit-time', detail)}/>
    {/if}
</div>

<style>
    .user-message {
        @apply rounded-lg rounded-tr-none bg-[#C9E1FF];
    }
</style>
