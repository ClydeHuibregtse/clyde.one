<script lang="ts">
    import { slide, fade } from "svelte/transition";

    export let imgURL: string = "";
    export let title: string = "";
    export let projectURL: string = "";
    export let description: string = "";

    let isOpen = false;

    function toggleIsOpen() {
        isOpen = !isOpen;
    }

    function toURL(url: string) {
        window.location.href = url
    }

</script>

<div 
    class="project {isOpen ? 'project-no-hover' : ''}"
    on:click={toggleIsOpen}
    role="presentation"
>
    <div class="project-card ">
        <img
            class="project-image"
            src={imgURL}
            alt=""
        />
        <div class="project-title">{title}</div>
    </div>
    {#if isOpen}
        <div class="project-hidden" transition:slide>
            <p transition:fade>{@html description}</p>
            <button class="project-button" transition:fade on:click={() => toURL(projectURL)}>
                More
            </button>
        </div>
    {/if}
</div>
    
<style>
    .project {
        display: flex;
        flex-direction: column;
        transition: transform 0.2s;
        width: 300px;
    }
    
    .project:hover {
        transform: scale(1.1);
    }
    .project-no-hover:hover {
        transform: scale(1.0);

    }

    .project-hidden {
        padding: 10px;
        transition: height 0.5s, opacity 0.5s;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-card {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
    }

    .project-image {
        margin-left: 10px;
        width: 50px;
        height: 50px;
    }

    .project-title {
        margin-right: 10px;
        font-size: x-large;
        font-family: 'helvetica';

    }

    /* https://getcssscan.com/css-buttons-examples # 89 */
    .project-button {
        width: 50%;
        --b: 3px;   /* border thickness */
        --s: .45em; /* size of the corner */
        --color: #373B44;
        
        padding: calc(.8em + var(--s)) calc(.9em + var(--s));
        color: var(--color);
        --_p: var(--s);
        background:
            conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
            var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
        transition: .3s linear, color 0s, background-color 0s;
        outline: var(--b) solid #0000;
        outline-offset: .6em;
        font-size: 16px;

        border: 0;

        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .project-button:hover,
    .project-button:focus-visible{
        --_p: 0px;
        outline-color: var(--color);
        outline-offset: .05em;
    }

    .project-button:active {
        background: var(--color);
        color: #fff;
    }

</style>