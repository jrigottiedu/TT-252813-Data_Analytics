import React from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

const CalendarComponent = () => {
  const selectedDate = dayjs("2025-03-31"); // Fecha fija

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate} 
        onChange={() => {}} // No permite cambios
        renderInput={(params) => <TextField {...params} />}
        disabled // Deshabilita la selección de fechas

      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
