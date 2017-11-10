class WorkoutsController < ApplicationController
  def show
    user = current_user
    @workout = Workout.find(params[:id])
    @workout.user

  end
end
