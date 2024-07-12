import cv2
import numpy as np
from scipy.stats import mode
from skimage import color

# 画像を読み込み
image = cv2.imread('1.png')
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# 画像をLab色空間に変換
lab_image = color.rgb2lab(image)

# ISCC-NBS色データを用意（ここでは仮のデータを使用）
iscc_nbs_colors = np.array([
    [243, 243, 243],  # White
    [255, 245, 238],  # Seaside Sand
    [240, 230, 140],  # Khaki
    [210, 180, 140],  # Tan
    [205, 133, 63],   # Peru
    [165, 42, 42],    # Brown
    [139, 69, 19],    # Saddle Brown
    [128, 0, 0],      # Maroon
    [255, 0, 0],      # Red
    [255, 165, 0],    # Orange
    [255, 255, 0],    # Yellow
    [0, 255, 0],      # Green
    [0, 255, 255],    # Cyan
    [0, 0, 255],      # Blue
    [255, 0, 255],    # Magenta
    [128, 128, 128],  # Gray
    [0, 0, 0],        # Black
    # 他の色データを追加
])

# Lab色空間に変換
iscc_nbs_lab_colors = color.rgb2lab(iscc_nbs_colors.reshape(-1, 1, 3) / 255.0).reshape(-1, 3)

# 各ピクセルを最も近いISCC-NBS色にマッピング
def nearest_color_index(color, colors):
    distances = np.sqrt(np.sum((colors - color) ** 2, axis=1))
    return np.argmin(distances)

mapped_colors = np.array([nearest_color_index(pixel, iscc_nbs_lab_colors) for pixel in lab_image.reshape(-1, 3)])
mapped_colors = mapped_colors.reshape(lab_image.shape[:2])

# 最頻値（モード）を計算
mode_result = mode(mapped_colors, axis=None)
mode_color_index = mode_result[0]


# 平均色を計算
mean_lab_color = np.mean(lab_image.reshape(-1, 3), axis=0)
mean_color_index = nearest_color_index(mean_lab_color, iscc_nbs_lab_colors)

# 分類された色名を出力
iscc_nbs_color_names = [
    "White", "Seaside Sand", "Khaki", "Tan", "Peru", "Brown", "Saddle Brown", "Maroon",
    "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Gray", "Black"
]
mode_color_name = iscc_nbs_color_names[mode_color_index]
mean_color_name = iscc_nbs_color_names[mean_color_index]

print("Mode Color Name:", mode_color_name)
print("Mean Color Name:", mean_color_name)
