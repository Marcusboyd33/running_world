class Api::V1::WorkoutsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token
  # before_action :authorize_user
  def index
    @workouts = Workout.order("created_at DESC").all
    render json: @workouts
  end

  # def index
  #   user_id = params[:user_id]
  #
  #   @workouts = Workout.where(user_id: user_id).map do |workout|
  #     workout.as_json.merge
  #   end
  #   render json: @workouts
  # end

  def show
    @workout = Workout.find(params[:id])
    @workout.user = current_user
    render json: @workout
  end

  def create
    @workouts = Workout.new(workout_params)
    @workouts.user = current_user
    @workouts.save
    render json: @workouts
  end

  # def destroy
  #   @workout = Workout.find(params[:id])
  #   @workout.user = current_user
  #   @workout.delete
  #   render json: { message: 'deleted workout'}
  #
  # end

  # private

  # def authorize_user
  #   if !current_user
  #     return render json: {errors: ['Please Sign in']}
  #   end
  # end
  private
  def workout_params
    params.permit(:time, :distance, :pace)
  end
end
