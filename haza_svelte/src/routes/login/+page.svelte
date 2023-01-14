<script lang="ts">

  import { Button, Avatar, Card } from "flowbite-svelte"
	import { onMount } from "svelte";
	import Profile from "./Profile.svelte";
	import { getGithubOAuthURI, getGoogleOAuthURI, OAuth2Platform, parseGoogleProfile, requestLogin, getNaverOAuthURI, getKakaoOAuthURI } from "./token-parser.js";

  // 현재 URI
  let currentURI = ""
  // oAuth2 인증 플랫폼
  let platform = ""
  // oAuth2 코드
  let code = ""
  // oAuth2 랜덤 숫자
  let state = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()

  // 프로파일 이미지
  let profileURL = ""
  // 닉네임
  let nickname = ""
  // 이메일
  let email = ""
  
  onMount(async () => {
    const searchParam = new URLSearchParams(window.location.search)

    // 현재 URL
    currentURI = location.href
    // 플랫폼 파싱
    platform = searchParam.get("platform") ?? ""
    // 코드 파싱
    code = searchParam.get("code") ?? ""
    // Access Token 파싱
    // const currentParams = new URLSearchParams(window.location.hash.slice(1))
    // accessToken = currentParams.get("access_token") ?? ""

    // 코드 필수 요구
    if (code.length <= 0) {
      return 
    }
    try {
      const loginResp = await requestLogin(platform as OAuth2Platform, code)
      profileURL = loginResp.profileURL
      nickname = loginResp.nickname
      email = loginResp.email
    } catch (err) {
      console.error(err)
      return
    }
  })
</script>

{#if nickname.length > 0}
  <h1>로그인 성공</h1>
  <div class="h-16" />
  <div class="self-center">
    <Profile profileURL={profileURL} nickname={nickname} email={email} />
  </div>
{:else}
  <Button href={getGoogleOAuthURI(currentURI)} color="red">Google로 로그인</Button>
  <div class="h-8"></div>
  <Button href={getGithubOAuthURI(currentURI)} color="dark">Github로 로그인</Button>
  <div class="h-8"></div>
  <Button href={getNaverOAuthURI(currentURI)} color="green">네이버로 로그인</Button>
  <div class="h-8"></div>
  <Button href={getKakaoOAuthURI(currentURI)} color="yellow">카카오로 로그인</Button>
{/if}

