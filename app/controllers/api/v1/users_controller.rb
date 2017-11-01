class Api::V1::UsersController < ApplicationController
  def index

  end

  def show
    @user = User.find_by(username: params[:id])
  end

  def user
    render json: current_user
  end

  # def create
  #
  # end
end
