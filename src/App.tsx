import { useState } from "react";

import { Provider } from "react-redux";

import { Button, Modal, TextField } from "@/components";
import { Router } from "@/router";
import { useCreateDeckMutation, useGetDecksQuery } from "@/services/decks";
import { store } from "@/services/store";

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
