<script lang="ts">
    import Project from "../components/project.svelte";
    import projectData from "$lib/assets/projects.json";
    
</script>

<div class="project-container">
    <div class="title">clyde.one</div>
    <hr>
    {#each projectData as project}
        <Project
            title={project.projectName}
            imgURL={project.imagePath}
            description={project.description}
            projectURL={project.projectURL}
        >
        </Project>
    {/each}
</div>

<style>
    hr {
        border: 2px solid #000000;
    }
    .title {
        font-family: helvetica;
        font-size: x-large;
        font-weight: bolder;
        text-align: center;
        padding-bottom: 20px;
    }
    .project-container {
        display: inline-block;
        background-color: rgb(236, 189, 126); /* Background color for the container */
        border: 2px solid #000000; /* Border for the container */
        padding: 10px; /* Add some padding for spacing */
        border-radius: 10px; /* Rounded corners */
        overflow-y: scroll;
        max-height: 400px;
        width: 100%;
    }
</style>

