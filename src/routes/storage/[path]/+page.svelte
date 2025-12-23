<script lang="ts">
  import type { PageData } from './$types';

  import Folder from '$lib/components/Folder.svelte';
  import type { ANAS_FolderOrFile } from '$lib/types';

  export let data: PageData; 
  const  { path } = data;

  import { onMount } from 'svelte';
	import File from '$lib/components/File.svelte';
  let folderData: [ANAS_FolderOrFile];

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
        body: JSON.stringify({ 
          disk: path,
          path: "/"
        }),
      }
    );
    // console.log(res);
    folderData = await res.json() as [ANAS_FolderOrFile];
    console.log("Received folder data:", folderData);
    // console.log(folderData);
  });

</script>

<h1>Path: {path}</h1>

{#each folderData as folderOrFile}
  {#if folderOrFile}

    {#if folderOrFile.kind === 'folder'}
      <Folder item={folderOrFile} />
    {:else}
      <File item={folderOrFile} />
      <!-- <p>File: {folderOrFile.name}</p> -->
    {/if}

  {:else}
    <p>Loading folder data...</p>
  {/if}
{/each}
