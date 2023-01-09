<script lang="ts">
  export let data:{post: {title: string, content: string}}
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>