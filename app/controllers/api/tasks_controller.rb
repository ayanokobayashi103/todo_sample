class Api::TasksController < ApplicationController
  protect_from_forgery

  # GET /tasks
  def index
    @tasks = Task.order('updated_at DESC')
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render :show, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/_
  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show, status: :ok
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end


  private

  def task_params
    params.fetch(:task, {}).permit( :name, :is_done )
  end

end
