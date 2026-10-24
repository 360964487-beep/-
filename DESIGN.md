---
name: 工作流文档
description: 让个人工作流与文档整理更清晰、更有活力。
colors:
  paper: "#fff8ef"
  surface: "#fffdf9"
  surface-warm: "#fff0df"
  ink: "#281b2b"
  muted: "#655761"
  outline: "#35253a"
  outline-soft: "#eadbd4"
  editorial-pink: "#ef4f82"
  editorial-yellow: "#ffca3a"
  editorial-teal: "#20b99b"
  dopamine-paper: "#fff3fc"
  dopamine-magenta: "#e936d8"
  dopamine-yellow: "#ffe43b"
  dopamine-cyan: "#23d5e8"
  citrus-paper: "#f7fbdc"
  citrus-green: "#d9f249"
  citrus-orange: "#ff7042"
  blueprint-paper: "#eaf1ff"
  blueprint-blue: "#315de8"
  night-paper: "#191526"
  night-pink: "#ff5795"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "23px"
    fontWeight: 850
    lineHeight: 1.2
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "16px"
    fontWeight: 850
    lineHeight: 1.25
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.45
rounded:
  sm: "8px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.editorial-pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "7px 10px"
  editor-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "13px 18px 22px"
---

# Design System: 工作流文档

## Overview

**Creative North Star: “彩色编辑部”**

把分类与文档列表组织成编辑部的索引栏，把正文留作清晰、开阔的阅读台。用粗标题、明确边界和成块的颜色让不同工作区域一眼可辨；色彩集中在导航、当前选中项和关键动作，正文保持舒适阅读。

界面提供“编辑部、多巴胺、柠檬汽水、蓝晒蓝图、夜色霓虹、黑白简约”六个主题。黑白简约使用中性灰白底、纯白编辑面和近黑文字，所有强调色归为黑灰；避免彩色装饰，保持清爽克制。选择只影响外观，并保存在当前应用来源的本地偏好中。移动端将分类置于上方，文档标题固定在左栏，正文在右侧。

**Key Characteristics:**
- 杂志式的大色块与有力标题。
- 正文以浅色纸面承载，鲜色服务于分区和状态。
- 浏览器、PWA 与 Electron 共用同一界面规则。

## Colors

编辑部默认使用暖纸白、珊瑚粉、明黄和青绿；其它主题以独立配色替换同一组界面角色。

### Primary
- **珊瑚粉** (#ef4f82)：主操作和正文标题栏背景。
- **多巴胺洋红** (#e936d8)：多巴胺主题主色。
- **柠檬橙** (#ff7042)：柠檬汽水主题主色。
- **蓝晒蓝** (#315de8)：蓝晒蓝图主题主色。
- **霓虹粉** (#ff5795)：夜色霓虹主题主色。
- **黑白简约** (#181818)：黑白简约主题唯一强调色；搭配 #f2f2f0 页面底色、#ffffff 编辑面与 #171717 正文文字。

### Secondary
- **编辑部明黄** (#ffca3a)：分类栏和次级强调。
- **荧光黄** (#ffe43b)：多巴胺主题的次级强调。
- **柠檬绿** (#d9f249)：柠檬汽水主题的次级强调。
- **薄荷青** (#20b99b)：工作流状态色。

### Neutral
- **暖纸白** (#fff8ef)：页面底色。
- **纸张白** (#fffdf9)：编辑和列表表面。
- **墨紫黑** (#281b2b)：主文字和轮廓。
- **暖灰紫** (#655761)：次要文字。
- **浅纸线** (#eadbd4)：柔和分隔线。

**The One Canvas Rule.** 每屏只使用当前选择的主题；正文表面保持足够安静，让用户的文档内容优先。

## Typography

**Display Font:** Inter（回退到系统无衬线字体）
**Body Font:** Inter（回退到系统无衬线字体）
**Label/Mono Font:** 与正文相同的系统无衬线字体

**Character:** 标题短促、结实，工具标签易扫读；正文行距宽松，长文档不会显得拥挤。

### Hierarchy
- **Display** (850, 23px, 1.2)：提示标题。
- **Title** (850, 16px, 1.25)：当前文档标题。
- **Body** (400, 14px, 1.72)：文档正文。
- **Label** (700, 12px)：分类、文档行与工具操作。

## Layout

桌面端采用分类、文档、正文三栏。窗口变窄时，分类移到上方横向滚动，文档标题保持左侧纵向列表，正文占据右栏。760px 以下启用窄屏结构；工具栏可横向滚动，保留原有触控尺寸。桌面主内容区以弹性布局填满窗口，侧栏独立滚动。

## Elevation & Depth

采用清晰轮廓搭配柔和阴影；选中状态有轻微抬升，避免无模糊的硬阴影。焦点使用蓝色环，分区主要依赖背景色和边界线，而非叠加卡片。

### Shadow Vocabulary
- **Ambient panel** (0 8px 22px rgba(55,34,45,.09))：侧栏与正文面板。
- **Active navigation** (0 6px 12px rgba(40,27,43,.17))：当前工作空间标签。

## Shapes

面板圆角为14px，内容块约10px，紧凑控件约8px。外轮廓较明确，内部列表与正文块使用更轻的细线。按钮便于鼠标和触屏操作。

## Components

### Buttons
- **Shape:** 9px；主要操作使用较明显的外轮廓。
- **Primary:** 珊瑚粉底色和深墨文字。
- **Hover / Focus:** 背景轻微变化，键盘焦点显示可见的蓝色外环。
- **Secondary:** 暖白表面，边线随悬停增强。

### Cards / Containers
- **Corner Style:** 14px。
- **Background:** 纸张白。
- **Shadow Strategy:** 柔和环境阴影加深色轮廓。
- **Border:** 2px 外框，内容块改用浅色细线。
- **Internal Padding:** 面板约10–18px，正文行距1.72。

### Inputs / Fields
- **Style:** 纸面背景，浅色边线，8–10px圆角。
- **Focus:** 蓝色可见焦点环；主题选择使用原生下拉控件。

### Navigation
- 桌面端使用两个大号工作空间标签。
- 活动工作空间使用当前主题主色；分类栏使用次级色。
- 窄屏分类水平滚动，文档标题仍固定在左侧。

### Editor Block
- 块标题区域用主题浅色底，正文保持干净纸面。
- 收起、锁定和删除操作使用统一线性图标与可访问标签。

## Do's and Don'ts

### Do:
- **Do** use the selected theme tokens across every workspace and transient menu.
- **Do** keep document text readable against a quiet paper surface.
- **Do** preserve visible keyboard focus and reduced-motion preferences.

### Don't:
- **Don't** change document data when saving the visual theme preference.
- **Don't** move the document title list above or below the content on narrow screens.
- **Don't** mix palettes from different themes in the same view.