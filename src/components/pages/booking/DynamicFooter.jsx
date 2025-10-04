import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import HandleAvailability from "./HandleAvailability";
import ValidateBooking from "/src/components/helpers/ValidateBooking";

const steps = [
  "Check Availability",
  "Select Table",
  "Guest Details",
  "Confirmation",
];

export default function DynamicFooterWithStepper({
  page,
  formData,
  setError,
  setTables,
  setPage,
  handleConfirm,
}) {
  const handleNext = () => {
    if (page === 0) {
      HandleAvailability(formData, setError, setTables, setPage);
    } else if (page === 1 || page === 2) {
      setPage((currPage) => currPage + 1);
    } else if (page === 3) {
      const errors = ValidateBooking(formData);
      if (Object.keys(errors).length > 0) {
        setError(Object.values(errors).join(", "));
        return;
      }
      handleConfirm();
    }
  };

  const handleBack = () => {
    if (page > 0) setPage((currPage) => currPage - 1);
  };

  const nextLabel =
    page === 0
      ? "Check Availability"
      : page === 3
      ? "Confirm Booking"
      : "Next";

  return (
    <Box sx={{ width: "100%", p: 2, mt: 3 }}>
      {/* Stepper Header */}
      <Stepper activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Navigation Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        {page > 0 && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleBack}
            sx={{ minWidth: 120 }}
          >
            Go Back
          </Button>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ minWidth: 160 }}
        >
          {nextLabel}
        </Button>
      </Stack>
    </Box>
  );
}