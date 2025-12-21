<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData; 
  const  { path } = data;

  import { onMount } from 'svelte';

  onMount(async () => {
    console.log("Fetching folder data for path:", path);
    const apipath = "http://192.168.1.104:8080";
    const res = await fetch( 
      `${apipath}/folder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: path }),
      }
    );
    // console.log(res);
    const folderData = await res.json();
    console.log(folderData);
  });

</script>

<h1>Path: {path}</h1>