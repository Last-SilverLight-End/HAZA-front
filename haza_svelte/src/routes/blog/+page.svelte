<script lang="ts">
  import { onMount } from "svelte"
  export let data:{summaries:Array<{slug: string, title: string,}>}

  let currentTime:{utc_datetime: string, client_ip: string}

  onMount(async () => {
    currentTime = await (await fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")).json()
  })
</script>

<h1>blog</h1>

<ul>
  {#each data.summaries as {slug, title}}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>