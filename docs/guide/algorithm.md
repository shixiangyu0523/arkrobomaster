# 算法方向

> 🧠 负责机器人的 **路径规划、导航定位、决策算法、仿真验证**

---

## 学习路线

### 第一阶段：基础入门
1. **C++ 进阶**：现代 C++ (C++17/20)、智能指针、模板
2. **Python 科学计算**：NumPy、Matplotlib、SciPy
3. **ROS2 入门**：节点通信、Topic/Service/Action
4. **数学基础**：线性代数、概率论、最优化

### 第二阶段：专业进阶
1. **路径规划**：A* 算法、Dijkstra、RRT、轨迹优化
2. **定位与建图**：SLAM 基础、AMCL、Cartographer
3. **状态估计**：卡尔曼滤波、扩展卡尔曼滤波 (EKF)
4. **运动控制**：MPC 模型预测控制、LQR

### 第三阶段：实战应用
1. **哨兵导航**：全自动哨兵定位与巡逻（RM2027：UDP+MQTT通信，RJ45千兆接口）
2. **决策系统**：有限状态机 (FSM)、行为树、经济系统策略
3. **仿真平台**：Gazebo/Ignition 仿真、数字孪生
4. **Isaac Sim/Gym**：强化学习训练环境

---

## 推荐工具

| 工具 | 用途 |
|------|------|
| **ROS2 Humble/Iron** | 机器人操作系统 |
| **Gazebo Fortress** | 物理仿真 |
| **Eigen** | 线性代数库 |
| **Ceres Solver** | 非线性优化 |
| **GTSAM** | 因子图优化 |
| **RViz2** | 可视化工具 |

---

## 推荐资源

- [ROS2 官方文档](https://docs.ros.org/en/humble/)
- [Awesome RoboMaster](https://github.com/OpenRoboMaster/awesome-robomaster)
- [RMUA 开源项目（东北大学 Alkaid）](https://github.com/wengang-niu/RMUA2022_Alkaid)
- [RoboMaster ISAAC Gym 仿真框架 (Demo)](https://github.com/Yueyuanh/RoboMasterGym)

---

## 新人任务清单

- [ ] 安装 Ubuntu 22.04 + ROS2 Humble
- [ ] 完成 ROS2 官方 Tutorial（Publisher/Subscriber）
- [ ] 实现一个简单的 A* 路径规划算法
- [ ] 在 Gazebo 中搭建一个简单的移动机器人仿真
- [ ] 了解卡尔曼滤波的数学原理并实现一维示例
- [ ] 阅读一篇 RM 导航相关论文/开源项目