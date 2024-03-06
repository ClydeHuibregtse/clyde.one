<script lang="ts">
    import ProjectContainer from "../components/project_container.svelte";
    import smileyImg from "$lib/assets/smiley_logo.png";

</script>

<svelte:head>
	<title>clyde.one</title>
</svelte:head>

<div id="main">
    <div id="main-container">
        <div id="smiley-container">
            <img id="smiley"
                src={smileyImg}
                alt=""
            />
        </div>
        <div id="projects">
            <ProjectContainer></ProjectContainer>
        </div>
    </div>
</div>

<style>


    #main {
        height: 100vh;
        background-color: rgb(255, 241, 223);
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    #main-container {
        transform: translate(0%, -30%);
        align-items: center;
        width: 250px;
        height: 200px;
    }

    #smiley-container {
        margin: auto;
        width: 60px;
        height: 60px;
        border-radius: 5%;
        border: 5px solid rgb(0, 0, 0);
        transform: translate(-150%, 30%);
        position: relative;
    }

    #smiley {
        display: block;
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

</style>