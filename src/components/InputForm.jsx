"use client"


import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"



export function InputForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} className="h-16 w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
