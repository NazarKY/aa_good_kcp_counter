# frozen_string_literal: true

module Api
  module V1
    class DayStatisticController < ApplicationController
      before_action :set_day_static, only: %i[show destroy]

      def index
        render json: DayStatistic::TOTAL_AT_BEGINNING
      end

      def create
        render json: {}
      end

      def show
        render json: @day_static.results_on_today
      end

      def destroy
        render json: {}
      end

      private

      def day_static_params
        params.permit(:pig_dogs, :artillery, :helicopters, :aircraft, :tanks, :apv)
      end

      def set_day_static
        @day_static = DayStatistic.last
      end
    end
  end
end

