<script lang="ts">
    import ProjectContainer from "../components/project_container.svelte";
    import smileyImg from "$lib/assets/smiley logo.png";
</script>


<div id="main">
    <div id="main-container">
        <div id="smiley-container">
            <img id="smiley"
                src={smileyImg}
                alt=""
                height=70
            />
        </div>
        <div id="projects">
            <ProjectContainer></ProjectContainer>
        </div>
    </div>
</div>

<style>


    #main {
        display: flex;
        flex-direction: row;
        height: 100vh;
        background-color: rgb(255, 241, 223);
    }
    #main-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -130%);
        align-items: center;
        width: 324px;
        height: 200px;
    }
    #smiley-container {
        margin: auto;
        width: 70px;
        border-radius: 5%;
        border: 5px solid rgb(0, 0, 0);
        position: relative;
        right: 180px;
        top: 20px;
    }
    #smiley {
        display: block;
        height: 100;
    }
    #projects {

    }


</style>