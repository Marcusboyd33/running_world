class Workout < ApplicationRecord

  belongs_to :user
  validates_presence_of :distance, :reps, :time, :type
  validates_numericality_of :distance :greater_than_or_equal_to => 0 
end
