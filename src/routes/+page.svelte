<script lang="ts">
  let paths: string[] = [];

  import { onMount } from 'svelte';

  onMount(async () => {
    const apipath = "http://192.168.1.104:8080";
    const res = await fetch(
      `${apipath}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    paths = await res.json();
    console.log(paths);
  });

  // $: console.log(paths);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
  {#each paths as path}
    <a href="/storage/{path}"><li>/storage/{path}</li></a>
  {/each}
</ul>