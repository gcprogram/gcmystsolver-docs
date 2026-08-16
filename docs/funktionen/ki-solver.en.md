# AI Solving

If none of the [automatic solvers](solver.md) find a match and the puzzle isn't a recognized
field puzzle, GCMystSolver can optionally consult a connected AI.

## Requirement

You need your own API key from a supported AI provider, which you store in *Setup*. Without a
stored key the app still works — just without the AI building block, purely with the automatic
solvers.

## Recommendation: start for free with NVIDIA or Google Gemini

GCMystSolver itself does not ship with any AI access — you need your own API key. Two providers
are particularly well suited for getting started because they offer a **free usage quota with no
credit card required**:

- **[Google Gemini](https://aistudio.google.com/)** (Google AI Studio): generate a free API key
  in a few clicks with a Google account ("Get API key"). The free tier is plenty for normal use
  of the app.
- **[NVIDIA](https://build.nvidia.com/)** (NVIDIA API catalog): a free account gives you access
  to numerous hosted models through an OpenAI-compatible interface — also usable without a
  credit card.

Both are already set up as ready-made **presets** in GCMystSolver (see the step-by-step guide
below) — so you don't have to look up a base URL by hand.

!!! tip "Add more than one model"
    Since the app automatically moves on to the next saved model on a failure (see
    [Model rotation](#model-rotation-instead-of-a-fixed-backup-model) below), it's worth adding
    both a Gemini and an NVIDIA model, for example — then, if one runs out of quota, the other
    provider automatically takes over.

### Step by step

1. Generate and copy a free API key at [aistudio.google.com](https://aistudio.google.com/) or
   [build.nvidia.com](https://build.nvidia.com/).
2. In GCMystSolver, go to **Setup** and turn on the **"AI solver"** switch.
3. In the **"Add model"** section:
      - Under **"Provider"**, select *Google Gemini* or *NVIDIA* (the base URL is filled in
        automatically).
      - Paste the copied key into the **"API key"** field.
      - Tap **"Fetch available models"** — the app loads the list of available models.
      - Pick a model under **"Model"**.
      - Save with **"Save model"**.
4. The saved model now appears under **"Saved models"** and is automatically used as the
   **"Main model"**, provided none was set yet.
5. Optional: repeat step 3 for a second provider — both then end up in the fallback order.

![Setup: enable AI solver and add a model](../assets/screenshots/setup-ai-solver.png)

![Setup: provider selection with NVIDIA/Google Gemini presets](../assets/screenshots/setup-add-model.png)

## Model rotation instead of a fixed backup model

You store a list of your own models in *Setup*. If a request fails (e.g. because a provider is
overloaded), the app automatically tries the next model from your list, without asking. Only once
**the entire list** has been tried unsuccessfully for a single request does a prompt appear with
the options *Cancel* or *Continue*.

Under *Setup → Test models* you can test every stored model individually.

## Roughly estimating cost

The setup guide shows a rough token-budget estimate: for each cache the AI actually attempts,
that's roughly 900–1,000 tokens; for a whole PocketQuery of ~1,000 caches, typically several tens
of thousands up to around 200,000 tokens — depending on how many caches actually get passed
through to the AI stage (the automatic solvers catch the bulk of them beforehand).

## Transparency of the solution

An AI-suggested solution is always shown together with its reasoning and marked as
**uncertain (yellow)** until you confirm or correct it — it never automatically overwrites a
solution already marked as trusted.
