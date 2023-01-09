<script lang="ts">
	import { Dropzone, Img } from "flowbite-svelte"

  export let fallbackSrc = ""

  export let fileList:FileList | undefined = undefined

  export let previewURL = ""

  export let round = false

  export let alt = ""

  export let id = ""

  let roundClass:string
  $: {
    roundClass = round ? "rounded-full" : "rounded-lg"
  }

  let className = ""

  export {className as class}

  $: previewURL = getPreviewURL(fileList)

  // FileList로 부터 src URL을 생성
  function getPreviewURL(list: FileList | undefined) {
    if (list == null) {
      return ""
    }
    const file = list.item(0)
    if (file == null) {
      return ""
    }
    return URL.createObjectURL(file)
  }
</script>

<Dropzone bind:files={fileList} id={id} defaultClass="flex flex-col justify-center items-center w-full h-full bg-gray-50 {roundClass} border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 {className} overflow-hidden">
  {#if fallbackSrc.length > 0}
    <Img src={previewURL.length > 0 ? previewURL : fallbackSrc} alt={alt} class="{roundClass}" />
  {:else if previewURL.length > 0}
    <Img src={previewURL} alt={alt} class="{roundClass}" />
  {/if}
</Dropzone>