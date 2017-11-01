class Workout < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates_presence_of :distance, :reps, :time, :racetype
  validates_numericality_of :distance
  validates_numericality_of :reps, :only_integer => true

end
