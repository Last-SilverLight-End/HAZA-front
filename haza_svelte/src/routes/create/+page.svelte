<script lang="ts">
  import { onMount } from "svelte"

  import { Input, Textarea, Fileupload, Label, Dropzone, Img } from "flowbite-svelte"
	import ImageDropzone from "../ImageDropzone.svelte";

  let survey_title:string | undefined

</script>

<div class="flex flex-row">
  <div class="dropzone1 w-32 h-32">
    <ImageDropzone round={true}>
    </ImageDropzone>
  </div>
  <div class="flex flex-col justify-center ml-6">
    <Input type="text" id="title" placeholder="Title" required size="lg" bind:value={survey_title}/>
  </div>
</div>

<div>Title: {survey_title}</div>


<style>
</style>