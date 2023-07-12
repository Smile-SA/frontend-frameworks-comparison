<template>
  <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
    <DynamicHeader />
    <div
      role="main"
      class="main-container container-fluid js-quickedit-main-content"
    >
      <div class="row"><slot /></div>
    </div>
    <DynamicFooter />
  </div>
</template>
