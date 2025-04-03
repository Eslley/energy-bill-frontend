import axiosClient from "./client";
import { GetEnergyBillsInput, GetEnergyBillsOutput } from "./types/energyBill";
import { GetReportOutput } from "./types/report";

export const filterEnergyBill = async (filters?: GetEnergyBillsInput) => {
  try {
    const response = await axiosClient.get<GetEnergyBillsOutput>(
      "/get-energy-bills",
      {
        params: filters,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReport = async () => {
  try {
    const response = await axiosClient.get<GetReportOutput>("/get-report");

    return response.data;
  } catch (error) {
    throw error;
  }
};
