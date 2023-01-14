<script lang="ts">

  import { Button, Avatar, Card } from "flowbite-svelte"
	import { onMount } from "svelte";
	import { GOOGLE_CLIENT_ID } from "./config.js";
	import Profile from "./Profile.svelte";
	import { getGoogleOAuthURI, OAuth2Platform, parseGoogleProfile } from "./token-parser.js";

  const CLIENT_ID = GOOGLE_CLIENT_ID

  // 현재 URI
  let currentURI = ""
  // oAuth2 인증된 플랫폼
  let platform = ""
  // 프로파일 이미지
  let profileURL = ""
  // 닉네임
  let nickname = ""
  // 이메일
  let email = ""

  let loginUrl = ""
  let accessToken = ""
  let jsonResp = ""
  
  onMount(async () => {
    // 현재 URL
    currentURI = location.href
    // 플랫폼 파싱
    platform = new URLSearchParams(window.location.search).get("platform") ?? ""
    // Access Token 파싱
    const currentParams = new URLSearchParams(window.location.hash.slice(1))
    accessToken = currentParams.get("access_token") ?? ""
    // 플랫폼 별 행동
    if (platform === OAuth2Platform.GOOGLE) {
      // 플랫폼 응답이 구글일 시
      const myInfo = await parseGoogleProfile(accessToken)
      profileURL = myInfo.picture
      nickname = myInfo.name
      email = myInfo.email
    }
  })
  onMount(async () => {
    const currentParams = new URLSearchParams(window.location.hash.slice(1))
    accessToken = currentParams.get("access_token") ?? ""
    if (accessToken.length > 0) {
      jsonResp = JSON.stringify(await parseGoogleProfile(accessToken), null, 2)
    }
  })
</script>

{#if profileURL.length > 0}
  <div class="self-center">
    <Profile profileURL={profileURL} nickname={nickname} email={email} />
  </div>
{/if}

{#if platform === OAuth2Platform.GOOGLE}
  <h1>구글 로그인</h1>
  <h2>토큰: {accessToken}</h2>
  <h3>응답: {jsonResp}</h3>
{:else}
  <Button href={getGoogleOAuthURI(currentURI)}>Google로 로그인</Button>
{/if}

