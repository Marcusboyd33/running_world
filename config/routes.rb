Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "users#index"

  namespace "api" do
    namespace "v1" do
      resources :users, only: [:index, :show]
      resources :workouts

      get "/current-user", to: "users#user"

      # all workouts for one user
      # get "users/:user_id/workouts", to: "workouts#user_workouts_index"
      #
      # # one specific workout for a user
      # get "users/:user_id/workouts/:workout_id", to: "workouts#show"
      #
      # # workouts for current user
      # get "/current-user", to: ""
      # create


    end
  end
end
