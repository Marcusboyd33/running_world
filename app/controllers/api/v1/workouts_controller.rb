class Api::V1::WorkoutsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @review
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user = current_user
    render json: @workout
  end

  private

  def workout_params
    params.permit(:type, :time, :distance, :rest, :reps, :intervaldistance)
  end
end
