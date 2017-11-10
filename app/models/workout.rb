class Workout < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates_presence_of :distance,  :time
  validates_numericality_of :distance

end
