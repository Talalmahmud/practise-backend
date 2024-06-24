export const getUser = async (req, res) => {
  return res.status(200).json({ success: true, message: "Get users" });
};

export const addUser = async (req, res) => {
  return res.status(200).json({ success: true, message: "Add users" });
};
