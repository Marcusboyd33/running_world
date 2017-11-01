Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "user#index"
  namespace "api" do
    namespace "v1" do
      resources :users, param: :email
      resources :workouts

      get "/current-user", to: "users#user"

      # all workouts for one user
      get "users/:user_slug/workouts", to: "workouts#user_workouts_index"

      # one specific workout for a user
      get "users/:user_slug/workouts/:workout_id", to: "workouts#show"

      # create
      # post "users/:user_slug/workouts"
    end
  end
end
