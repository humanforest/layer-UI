<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '#ui/types'
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  last: {
    type: Boolean,
    default: false,
  },
})



const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <div class="space-y-12">
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
      <div>
        <h2 class="text-base leading-7">
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mt-1 text-sm leading-6 text-gray-400 dark:text-gray-500"
        >
          {{ subtitle }}
        </p>
        <div class="mt-4 text-sm leading-6 text-gray-400 dark:text-gray-500">
          <slot name="section-description" />
        </div>
      </div>

      <div class="grid max-w-2xl grid-cols-1 gap-4 md:col-span-2">
        <div class="grid gap-4 sm:grid-cols-2">
          <UForm
            class="space-y-4"
            :state="state"
            :schema="schema"
            @submit="onSubmit"
          >
            <slot />
          </UForm>
        </div>
      </div>
    </div>
    <USeparator v-if="!last" />
  </div>
</template>
