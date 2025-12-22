<script lang="ts">
  import type { ANAS_FolderOrFile } from '$lib/types';
  export let item: ANAS_FolderOrFile;
</script>

<div class="panel">
  <div class="open-folder-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" 
    ><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
  </div>
  <div class="folder-icon type-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>
    </div>
  <span>{item.name}</span>
</div>

<style>
  .panel {
    display: flex;
    align-items: center;
    width: 300px;
    height: 32px;
    background-color: rgb(0, 39, 70);
    border-radius: 4px; 
  }


  .folder-name {
    width: calc(300px - 32px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .panel:hover {
    background-color: rgb(90, 49, 0);
    cursor: pointer;
  }
  .open-folder-icon {
    /* margin-right: 10px; */
    background-color: #787878;
    width: 16px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .open-folder-icon:hover {
  opacity: 0.7;
  cursor: pointer;
}

.open-folder-icon > svg {
  width: 16px;
  height: 16px;
  font-size: 16px;
}

.type-icon {
  width: 32px;
  height: 32px;
  /* background-color: rgb(125, 104, 107); */
  display: flex;
  justify-content: center;
  align-items: center;
}
.folder-name {
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>