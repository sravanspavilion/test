"use client";

import { useEffect } from "react";
import ClaritySDK from "@microsoft/clarity";
import { CLARITY_ID } from "@/lib/config";

/**
 * Microsoft Clarity — session recordings, heatmaps & analytics.
 * Initialized on the client with the official @microsoft/clarity package.
 * Completely disabled when `NEXT_PUBLIC_CLARITY_ID` is empty.
 */
export function Clarity() {
  useEffect(() => {
    if (!CLARITY_ID) return;
    ClaritySDK.init(CLARITY_ID);
  }, []);

  return null;
}