<script lang="ts">
  import type { ANAS_FolderOrFile } from '$lib/types';
  export let item: ANAS_FolderOrFile;
</script>
<div class="panel-top-file">
  <div class="panel">
    <div class="file-icon type-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path></svg>
    </div>
    <span>{item.name}</span>
  </div>
</div>

<style>
  .panel-top-file {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
  .panel {
    display: flex;
    align-items: center;
    width: 300px;
    height: 32px;
    background-color: rgb(0, 39, 70);
    border-radius: 4px; 
  }
  
/* .file-icon > svg {
  width: 16px;
  height: 16px;
  font-size: 16px;
} */

.type-icon {
  width: 32px;
  height: 32px;
  /* background-color: rgb(125, 104, 107); */
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>