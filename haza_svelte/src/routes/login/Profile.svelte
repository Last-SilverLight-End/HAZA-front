<script lang="ts">
  import { Card, Avatar } from "flowbite-svelte"

  export let profileURL = ""
  export let nickname:string
  export let email:string
</script>

<Card>
  <div class="flex items-center space-x-4">
    <Avatar src={profileURL} rounded size="lg"/>
    <div class="space-y-1 font-medium dark:text-white">
      <div>{nickname}</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">{email}</div>
    </div>
  </div>
</Card>