# AdvanceToLastStepOmniscript
This OmniScript and LWC combination provides the functionality to skip directly to the final step. While navigating back to previous steps is a native feature in OmniStudio, returning to the final step typically requires the user to manually click through every intermediate step again. To solve this, our solution displays a button on every step that becomes visible only after the user has reached the last step. When clicked, this button redirects the user straight to the end of the OmniScript, eliminating the need to navigate through each step individually

# How it works?

<img width="2465" height="978" alt="image" src="https://github.com/user-attachments/assets/bcf6a7c5-6e2c-43b3-b18b-4c69f3936619" />

Before entering the final step, this Set Values element configures the variables to indicate the following:

"lastComponentPass" = true: Indicates that the user has reached the final step.

"backToLastComponent" = false: Ensures that all previous steps remain visible, as this variable is used in the Conditional View property for all steps (as shown in the image below)."

<img width="2783" height="1182" alt="image" src="https://github.com/user-attachments/assets/d656b749-dc9e-441e-95c7-eb62b4ef64f8" />

Since each step of the OmniScript uses the Conditional View shown above, clicking the LWC button triggers an action that sets backToLastComponent to true. It then calls the OmniscriptBaseMixin method this.omniNextStep() to navigate forward. Because of the Conditional Views and the updated variable, all intermediate steps are hidden, effectively making the final step the immediate next step.

# Showcase
Below is a showcase of the implemented solution.

![2026-03-26 12-49-29 (1)](https://github.com/user-attachments/assets/a7ebb7c7-848e-4a44-bed5-5386c779db8d)
