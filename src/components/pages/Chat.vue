<template>
  <div class="layout-padding text-center">
    <p class="caption" style="margin-top: 72px">
      Chat.
    </p>

    <q-fixed-position corner="top-right" :offset="[18, 18]">
      <q-btn round color="secondary" icon="mail_outline" class="animate-pop" />
    </q-fixed-position>

    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round color="secondary" icon="phone" class="animate-pop" />
    </q-fixed-position>

    <q-fixed-position corner="bottom-left" :offset="[18, 18]">
      <q-btn round color="secondary" icon="thumb_up" class="animate-pop" />
    </q-fixed-position>

    <q-fixed-position corner="top-left" :offset="[18, 18]">
      <q-btn round color="secondary" icon="location_on" class="animate-pop" />
    </q-fixed-position>
  </div>
</template>

<script>
import {
  QFixedPosition,
  QBtn
} from 'quasar'

export default {
  components: {
    QFixedPosition,
    QBtn
  }
}
</script>
