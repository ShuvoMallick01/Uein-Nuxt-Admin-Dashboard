<script setup lang="ts">
definePageMeta({
  layout: "settings-layout",
});
</script>

<template>
  <Card class="xl:p-6">
    <CardTitle class="mb-6 text-base leading-none">Plan & Billing</CardTitle>

    <CardContent>
      <div class="space-y-5">
        <div class="mb-7">
          <h5 class="text-sm font-semibold">Change your plan</h5>
          <p class="mt-1 text-xs text-muted">
            Changing the plan will take effect immediately. You will be charged
            for the rest of the current month.
          </p>
        </div>

        <!-- SUBSCRIPTION PLANS -->
        <div class="grid grid-cols-1 gap-4 xl:gap-6 md:grid-cols-3">
          <PlanItem
            :price="10"
            name="Basic"
            description="Starter Plan for Individuals"
            isCurrent
          />
          <PlanItem
            :price="20"
            name="Premium"
            description="Starter Plan for Individuals"
          />
          <PlanItem
            :price="30"
            name="Enterprise"
            description="Starter Plan for Individuals"
          />
        </div>
      </div>

      <hr class="my-10 border-border" />

      <!-- BILLING DETAILS -->
      <div class="space-y-5">
        <h5 class="text-sm font-semibold">Billing Details</h5>

        <form class="space-y-8">
          <div class="grid grid-cols-4 gap-4 xl:gap-6">
            <div class="col-span-full">
              <TextField
                id="card-holder"
                name="card-holder"
                label="Card Holder"
                placeholder="John Doe"
              />
            </div>

            <div class="col-span-full sm:col-span-2">
              <TextField
                id="card-number"
                name="card-number"
                label="Card Number"
                placeholder="1234 5687 1234 8956"
              />
            </div>

            <div class="col-span-2 sm:col-auto">
              <TextField
                id="expiration-date"
                name="expiration-date"
                label="Expiry date"
                placeholder="11/26"
              />
            </div>

            <div class="col-span-2 sm:col-auto">
              <TextField id="cvc" name="cvc" label="CVC" placeholder="456" />
            </div>

            <div class="col-span-2">
              <TextField
                id="country"
                name="country"
                label="Country"
                placeholder="USA"
              />
            </div>

            <div class="col-span-2">
              <TextField
                id="postal-code"
                name="postal-code"
                label="Postal code"
                placeholder="4245"
              />
            </div>
          </div>

          <div class="flex justify-end gap-4">
            <Button color="error" class="px-6">Cancel</Button>
            <Button class="px-8">Save</Button>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
