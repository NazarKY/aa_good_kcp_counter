# frozen_string_literal: true

class DayStatistic < ApplicationRecord
  TOTAL_AT_BEGINNING = {
    pig_dogs: 900_000,
    artillery: 5_689,
    helicopters: 961,
    aircraft: 1_379,
    tanks: 3_300,
    apv: 13_758
  }.freeze

  def results_on_today
    {
      apv: TOTAL_AT_BEGINNING[:apv] - apv,
      tanks: TOTAL_AT_BEGINNING[:tanks] - tanks,
      aircraft: TOTAL_AT_BEGINNING[:aircraft] - aircraft,
      pig_dogs: TOTAL_AT_BEGINNING[:pig_dogs] - pig_dogs,
      artillery: TOTAL_AT_BEGINNING[:artillery] - artillery,
      helicopters: TOTAL_AT_BEGINNING[:helicopters] - helicopters
    }
  end
end
