<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SkripsiAI — Chapter Breakdown Studio</title>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<!-- PDF.js for in-app PDF rendering -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script>window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';</script>
<!-- html2pdf for PDF Generation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<style>
:root{
  --bg:#F7F5F0;--surface:#FFF;--surface2:#F0EDE6;
  --border:#E2DDD6;--border2:#C8C2B8;
  --text:#1A1714;--text2:#6B6560;--text3:#9E9890;
  --accent:#2D6A4F;--accent-light:#E8F5EE;
  --purple:#4A3B8C;--purple-light:#EDEAF8;
  --gold:#B8860B;--gold-light:#FDF8E8;
  --red:#C0392B;--red-light:#FBEAE8;
  --blue:#1A5E9A;--blue-light:#EAF2FB;
  --radius:10px;--radius-lg:16px;
  --shadow:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);
  --shadow-md:0 4px 12px rgba(0,0,0,.08);
  --shadow-lg:0 10px 30px rgba(0,0,0,.15);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;font-size:14px;overflow:hidden;}
.app-shell{display:grid;grid-template-columns:250px 1fr 300px;grid-template-rows:52px 1fr;height:100vh;overflow:hidden}
.topbar{grid-column:1/-1;display:flex;align-items:center;gap:14px;padding:0 18px;background:var(--surface);border-bottom:1px solid var(--border)}
.logo{font-family:'Lora',serif;font-size:17px;font-weight:600;color:var(--accent);margin-right:6px}
.topbar-div{width:1px;height:22px;background:var(--border)}
.breadcrumb{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--text2)}
.breadcrumb strong{color:var(--text);font-weight:500}
.topbar-right{display:flex;align-items:center;gap:8px;margin-left:auto}
.pom-widget{display:flex;align-items:center;gap:7px;padding:4px 10px;background:var(--surface2);border:1px solid var(--border);border-radius:20px}
.pom-time{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:var(--text)}
.pom-dot{width:7px;height:7px;border-radius:50%;background:var(--text3)}
.pom-dot.running{background:var(--accent);animation:pulse 1.4s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.pom-btn-sm{padding:3px 9px;font-size:11px;font-weight:500;border:1px solid var(--border2);border-radius:20px;background:none;cursor:pointer;color:var(--text2);transition:all .15s;font-family:'DM Sans',sans-serif}
.pom-btn-sm:hover{background:var(--surface);color:var(--text)}
.pom-btn-sm.running{background:var(--accent);color:#fff;border-color:var(--accent)}
.streak-badge{display:flex;align-items:center;gap:5px;padding:4px 10px;background:var(--gold-light);border:1px solid #E6C96A;border-radius:20px;font-size:12px;font-weight:500;color:var(--gold)}
.btn{padding:6px 14px;font-size:12px;font-weight:500;border-radius:var(--radius);cursor:pointer;border:1px solid var(--border);background:var(--surface);color:var(--text2);transition:all .15s;font-family:'DM Sans',sans-serif}
.btn:hover{border-color:var(--border2);color:var(--text)}
.btn-accent{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn-accent:hover{background:#235A40;border-color:#235A40;color:#fff}
.sidebar{background:var(--surface);border-right:1px solid var(--border);overflow-y:auto;display:flex;flex-direction:column;padding:14px 0}
.sidebar-section-title{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);padding:10px 14px 5px}

/* Tree Nodes & Drag Drop */
.tree-node{display:flex;align-items:center;gap:7px;padding:6px 10px 6px 14px;cursor:grab;transition:background .12s;position:relative}
.tree-node:hover{background:var(--surface2)}
.tree-node:active{cursor:grabbing}
.tree-node.dragging{opacity:0.5; background:var(--surface2);}
.tree-node.drag-over{border-top:2px solid var(--accent); background:var(--accent-light);}
.tree-node.active{background:var(--accent-light)}
.tree-node.active::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);border-radius:0 2px 2px 0}
.tree-subbab{padding-left:26px}
.tree-icon{font-size:12px;flex-shrink:0}
.tree-label{font-size:12px;color:var(--text);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tree-node.active .tree-label{color:var(--accent);font-weight:500}
.tree-subbab .tree-label{font-size:11px;color:var(--text2)}

.main{display:flex;flex-direction:column;overflow:hidden;background:var(--bg)}
.main-tabs{display:flex;align-items:center;gap:2px;padding:10px 16px 0;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0}
.main-tab{padding:8px 14px;font-size:13px;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .15s;font-weight:400}
.main-tab.active{color:var(--accent);border-bottom-color:var(--accent);font-weight:500}
.editor-panel{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:11px; scroll-behavior:smooth;}
.section-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow); transition: box-shadow 0.3s ease;}
.highlight-card{box-shadow: 0 0 0 3px var(--accent) !important;}

.section-card-header{display:flex;align-items:center;gap:9px;padding:9px 13px;background:var(--surface2);border-bottom:1px solid var(--border)}
.section-type-badge{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:20px;flex-shrink:0}
.badge-bab{background:var(--purple-light);color:var(--purple)}
.badge-subbab{background:var(--accent-light);color:var(--accent)}
.section-title-input{flex:1;font-size:14px;font-weight:500;border:none;background:transparent;color:var(--text);font-family:'Lora',serif;outline:none;padding:0}
.section-actions{display:flex;gap:5px;margin-left:auto}
.icon-btn{height:26px;display:flex;align-items:center;justify-content:center;padding:0 8px;border:1px solid var(--border);border-radius:7px;background:none;cursor:pointer;color:var(--text2);font-size:11px;font-weight:500;transition:all .15s;font-family:'DM Sans',sans-serif;gap:4px}
.icon-btn:hover{background:var(--surface);border-color:var(--border2);color:var(--text)}
.icon-btn.danger:hover{background:var(--red-light);border-color:var(--red);color:var(--red)}

/* SUBBAB EDITOR RICH TEXT */
.para-content-wrap{padding:10px 18px 14px 18px;display:flex;flex-direction:column;gap:8px}
.para-toolbar{display:flex;gap:4px;padding:6px 0 8px 0;border-bottom:1px solid var(--border); margin-bottom:4px; align-items:center; flex-wrap:wrap;}
.rt-btn{height:26px; min-width:28px; padding:0 8px; font-size:13px; font-weight:600; font-family:'Lora',serif; border:1px solid transparent; border-radius:6px; background:transparent; cursor:pointer; color:var(--text2); display:flex; align-items:center; justify-content:center; transition:0.15s;}
.rt-btn:hover{background:var(--surface2); border-color:var(--border); color:var(--text);}
.para-textarea{width:100%;min-height:200px;border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;font-size:14px;line-height:1.8;font-family:'DM Sans',sans-serif;color:var(--text);background:var(--bg);outline:none;transition:border-color .15s; overflow-y:auto;}
.para-textarea:focus{border-color:var(--accent);background:var(--surface); box-shadow:0 0 0 3px var(--accent-light);}
.para-textarea:empty:before{content:attr(placeholder); color:var(--text3); font-style:italic; pointer-events:none; display:block;}
.para-textarea ul, .para-textarea ol{padding-left:24px; margin:8px 0;}
.para-textarea li{margin-bottom:6px;}

.para-meta{display:flex;align-items:center;gap:7px;flex-wrap:wrap; margin-bottom:4px;}
.word-count-chip{font-size:11px;color:var(--text3)}
.autosave-indicator{font-size:11px;color:var(--accent);margin-left:auto;display:flex;align-items:center;gap:4px;opacity:0;transition:opacity .3s}
.autosave-indicator.show{opacity:1}
.autosave-dot{width:5px;height:5px;border-radius:50%;background:var(--accent)}
.para-ai-bar{display:flex;gap:6px;flex-wrap:wrap; padding:10px 14px; background:var(--surface2); border-top:1px solid var(--border); border-radius:var(--radius);}
.para-ai-btn{padding:6px 12px;font-size:11px;font-weight:600;border:1px solid var(--border);border-radius:20px;background:var(--surface);cursor:pointer;color:var(--text2);transition:all .15s;font-family:'DM Sans',sans-serif}
.para-ai-btn:hover{background:var(--accent-light);border-color:var(--accent);color:var(--accent)}
.para-ai-btn.ai-next{background:var(--accent);color:#fff;border-color:var(--accent)}
.para-ai-btn.ai-next:hover{background:#235A40}

/* ATTACHMENTS */
.para-attachments{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}
.att-chip{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;font-size:11px;font-weight:500;background:var(--blue-light);color:var(--blue);border-radius:20px;border:1px solid #CDE0F5;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif}
.att-chip:hover{background:#DCEBF9;border-color:var(--blue)}
.att-del-btn{background:none;border:none;color:var(--blue);font-size:11px;cursor:pointer;opacity:0.6;padding:0 2px;margin-left:2px;display:flex;align-items:center}
.att-del-btn:hover{opacity:1;color:var(--red)}

.ref-list{display:flex;flex-direction:column;gap:7px;margin-top:8px}
.add-section-row{display:flex;gap:9px;padding:4px 0}
.add-section-btn{flex:1;padding:8px;border:1.5px dashed var(--border2);border-radius:var(--radius);background:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--text3);transition:all .15s;font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;gap:5px}
.add-section-btn:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light)}
.paste-zone{border:2px dashed var(--border2);border-radius:var(--radius-lg);padding:14px;background:var(--surface);box-shadow:var(--shadow)}
.paste-zone-label{font-size:12px;color:var(--text2);margin-bottom:7px;font-weight:500}
.paste-textarea{width:100%;height:72px;resize:none;border:1px solid var(--border);border-radius:var(--radius);padding:8px 10px;font-size:13px;font-family:'DM Sans',sans-serif;color:var(--text);background:var(--bg);outline:none;line-height:1.6}
.paste-textarea:focus{border-color:var(--accent);background:var(--surface)}
.paste-actions{display:flex;gap:8px;margin-top:8px;align-items:center}
.close-btn{background:none;border:none;font-size:16px;cursor:pointer;color:var(--text3);transition:color .15s;line-height:1;display:flex;align-items:center;justify-content:center}
.close-btn:hover{color:var(--red);}

/* THESIS TITLE BOX */
.thesis-title-box{margin-bottom:12px; background:var(--surface); padding:16px 18px; border-radius:var(--radius-lg); border:1px solid var(--border); box-shadow:var(--shadow); position:relative}
.thesis-title-label{font-size:10px; font-weight:700; color:var(--text3); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px; display:block}
.thesis-title-input{width:100%; resize:none; font-family:'Lora',serif; font-size:18px; line-height:1.4; font-weight:600; color:var(--text); border:none; outline:none; background:transparent}
.thesis-title-input::placeholder{color:var(--border2); font-weight:400; font-style:italic}

/* Preview Toolbar */
.preview-toolbar{display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap}
.preview-label{font-size:11px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}

/* A4 Paper Preview & Print */
.a4-wrapper { background: #e0e0e0; padding: 20px; overflow-y: auto; display: flex; justify-content: center; max-height: calc(100vh - 100px); border-radius: 8px; border: 1px solid var(--border); }
.a4-paper { background: white; width: 21cm; box-shadow: 0 4px 12px rgba(0,0,0,0.15); padding: 4cm 3cm 3cm 4cm; font-family: 'Times New Roman', Times, serif; font-size: 12pt; color: black; line-height: 1.5; position: relative; }
.a4-paper.spacing-2 { line-height: 2; }
.a4-paper h1 { font-size: 14pt; text-align: center; text-transform: uppercase; margin-bottom: 20px; font-weight: bold;}
.a4-paper h2 { font-size: 12pt; font-weight: bold; margin-top: 16px; margin-bottom: 8px; }
.a4-paper p, .a4-paper div { text-align: justify; }
.a4-cover { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; min-height: 20cm; margin-bottom: 2cm;}
.a4-cover .c-title { font-size: 14pt; font-weight: bold; text-transform: uppercase; margin-bottom: 2cm; }
.a4-cover .c-logo { width: 4cm; height: 4cm; margin-bottom: 2cm; border: 1px dashed #ccc; display:flex; align-items:center; justify-content:center; color:#999; border-radius:50%; }
.a4-cover .c-author { font-size: 12pt; font-weight: bold; text-transform: uppercase; margin-bottom: 0.5cm; }
.a4-cover .c-nim { font-size: 12pt; margin-bottom: 2cm; }
.a4-cover .c-univ { font-size: 14pt; font-weight: bold; text-transform: uppercase; line-height: 1.5; }

.toc-title { font-size: 14pt; font-weight: bold; text-align: center; margin-bottom: 20px; }
.toc-item { display: flex; align-items: baseline; margin-bottom: 8px; }
.toc-item .dots { flex-grow: 1; border-bottom: 1px dotted black; margin: 0 10px; }
.toc-bab { font-weight: bold; margin-top: 12px; }

/* Visual Page Break for Web Preview */
.print-page-break { border-top: 2px dashed #bbb; margin: 40px -3cm 40px -4cm; padding-top: 40px; position: relative; text-align: center;}
.print-page-break::before { content: "--- Batas Halaman ---"; position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: white; padding: 0 10px; color: #999; font-size: 10px; font-family: 'DM Sans', sans-serif; font-weight: 600; letter-spacing: 0.05em;}

@media print {
  body * { visibility: hidden; }
  #print-area, #print-area * { visibility: visible; }
  #print-area { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; background: white; overflow: visible;}
  .a4-paper { box-shadow: none; margin: 0; border: none; padding: 4cm 3cm 3cm 4cm; width: 21cm; }
  .a4-wrapper { padding: 0; background: transparent; overflow: visible; display: block; border:none; max-height: none;}
  .print-page-break { border: none; margin: 0; padding: 0; page-break-before: always; }
  .print-page-break::before { display: none; }
  @page { size: A4 portrait; margin: 0; }
}

/* Right panel */
.right-panel{background:var(--surface);border-left:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden}
.rp-tabs{display:flex;border-bottom:1px solid var(--border);flex-shrink:0}
.rp-tab{flex:1;padding:9px 2px;font-size:10px;font-weight:500;text-align:center;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent;transition:all .15s;text-transform:uppercase;letter-spacing:0.02em}
.rp-tab.active{color:var(--accent);border-bottom-color:var(--accent);font-weight:600}
.rp-body{flex:1;overflow-y:auto;padding:13px}
.rp-sec{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--text3);margin-bottom:7px;margin-top:13px}
.rp-sec:first-child{margin-top:0}
.cop-box{border:1px solid var(--border);border-radius:var(--radius);padding:9px;margin-bottom:7px;background:var(--bg);transition:border-color .15s}
.cop-box:hover{border-color:var(--border2)}
.cop-label{font-size:11px;font-weight:600;color:var(--purple);margin-bottom:3px}
.cop-text{font-size:12px;color:var(--text2);line-height:1.55}
.cop-apply{font-size:11px;margin-top:5px;padding:3px 9px;border:1px solid var(--border);border-radius:6px;background:none;cursor:pointer;color:var(--text2);font-family:'DM Sans',sans-serif;transition:all .15s}
.cop-apply:hover{border-color:var(--purple);color:var(--purple);background:var(--purple-light)}
.cop-ta{width:100%;height:56px;resize:none;border:1px solid var(--border);border-radius:var(--radius);padding:8px 10px;font-size:12px;font-family:'DM Sans',sans-serif;color:var(--text);background:var(--bg);outline:none;transition:border-color .15s;line-height:1.5}
.cop-ta:focus{border-color:var(--accent);background:var(--surface)}
.cop-send{width:100%;margin-top:5px;padding:7px;font-size:12px;font-weight:500;background:var(--accent);color:#fff;border:none;border-radius:var(--radius);cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .15s}
.cop-send:hover{background:#235A40}

/* Rak Pustaka */
.pustaka-rak {margin-bottom: 16px; border:1px solid var(--border); border-radius: var(--radius); overflow: hidden; background:var(--bg);}
.pustaka-rak-title {background:var(--surface2); padding:8px 12px; font-size:11px; font-weight:700; color:var(--text); border-bottom:1px solid var(--border);}
.pustaka-item-wrap {padding: 8px; border-bottom: 1px solid var(--border);}
.pustaka-item-wrap:last-child {border-bottom: none;}

.cite-fmt-bar{display:flex;gap:4px;margin-bottom:10px}
.cite-fmt-btn{flex:1;padding:5px;font-size:11px;font-weight:500;border:1px solid var(--border);border-radius:6px;background:none;cursor:pointer;color:var(--text2);font-family:'DM Sans',sans-serif;transition:all .15s}
.cite-fmt-btn.active{background:var(--accent-light);border-color:var(--accent);color:var(--accent)}
.cite-card{border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:7px}
.cite-top{padding:8px 10px}
.cite-title{font-size:12px;font-weight:500;color:var(--text);line-height:1.4;margin-bottom:2px}
.cite-meta{font-size:11px;color:var(--text2)}
.cite-fmt{padding:6px 10px;background:var(--bg);font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--text2);line-height:1.5;border-top:1px solid var(--border)}
.cite-actions{display:flex;gap:4px;padding:5px 10px;border-top:1px solid var(--border)}
.cite-btn{font-size:11px;padding:3px 9px;border:1px solid var(--border);border-radius:5px;background:none;cursor:pointer;color:var(--text2);font-family:'DM Sans',sans-serif;transition:all .15s;text-decoration:none;display:inline-flex;align-items:center}
.cite-btn:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light)}

/* Settings & Forms */
.settings-input {width: 100%; height: 32px; border: 1px solid var(--border); border-radius: 6px; padding: 0 10px; font-size: 12px; font-family: 'DM Sans', sans-serif; outline: none; margin-top: 4px; background: var(--bg); color: var(--text); transition: all .15s;}
.settings-input:focus {border-color: var(--accent); background: var(--surface);}
.settings-select {width: 100%; height: 34px; border: 1px solid var(--border); border-radius: 6px; padding: 0 8px; font-size: 12px; font-family: 'DM Sans', sans-serif; outline: none; background: var(--surface); color: var(--text); cursor: pointer;}
.form-row { display:flex; gap:12px; margin-bottom:14px; align-items:flex-end; flex-wrap:wrap;}
.form-group { display:flex; flex-direction:column; gap:6px; flex:1; min-width: 140px;}
.form-label { font-size:11px; color:var(--text2); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;}

/* Advanced AI Diff / Preview Boxes */
.side-by-side { display:flex; gap:12px; margin-top:14px; flex-wrap:wrap; }
.side-col { flex:1; display:flex; flex-direction:column; gap:6px; min-width:280px;}
.side-col-title { font-size:11px; font-weight:600; color:var(--text2); text-transform:uppercase; letter-spacing:0.04em;}
.diff-box { border:1px solid var(--border); border-radius:var(--radius); padding:14px; font-size:13px; background:var(--bg); overflow-y:auto; max-height:300px; line-height:1.7; font-family:'Lora',serif; color:var(--text);}
.diff-box.editable { background:var(--surface); outline:none; }
.diff-box.editable:focus { border-color:var(--accent); }
.new-text-highlight { background-color: var(--accent-light); color: var(--accent); border-left: 3px solid var(--accent); padding-left: 10px; margin-top: 14px; display: block; font-weight:500;}

.ai-thinking{display:none;position:fixed;inset:0;background:rgba(0,0,0,.3);backdrop-filter:blur(2px);z-index:1000;align-items:center;justify-content:center}
.ai-thinking.show{display:flex}
.ai-thinking-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:22px 30px;text-align:center;box-shadow:var(--shadow-md)}
.ai-spinner{width:34px;height:34px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 10px}
@keyframes spin{to{transform:rotate(360deg)}}
.ai-thinking-text{font-size:13px;color:var(--text2)}
.toast{position:fixed;bottom:18px;right:18px;padding:9px 15px;background:var(--text);color:#fff;border-radius:var(--radius);font-size:13px;opacity:0;transform:translateY(8px);transition:all .25s;pointer-events:none;z-index:9999;max-width:320px;box-shadow:var(--shadow-md)}
.toast.show{opacity:1;transform:translateY(0)}
.hidden{display:none!important}

/* Custom Modals */
.modal-overlay {display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); backdrop-filter:blur(3px); z-index:900; align-items:center; justify-content:center; padding: 20px;}
.modal-overlay.show {display:flex;}
.modal-content {background:var(--surface); border-radius:var(--radius-lg); box-shadow:var(--shadow-lg); display:flex; flex-direction:column; overflow:hidden; width:100%; max-width:800px; max-height:90vh;}
.modal-header {padding: 14px 20px; border-bottom: 1px solid var(--border); display:flex; align-items:center; justify-content:space-between; background:var(--surface2);}
.modal-title {font-weight:600; font-size:15px; color:var(--text);}
.modal-body {flex:1; overflow-y:auto; padding:20px; background:var(--bg);}
.modal-footer {padding: 14px 20px; border-top: 1px solid var(--border); display:flex; justify-content:flex-end; gap:10px; background:var(--surface);}

/* Viewer Specific */
#viewer-modal .modal-content {width: 90vw; height: 90vh; max-width:1200px;}
.viewer-toolbar {display:flex; gap:10px; padding: 8px 18px; background:var(--surface); border-bottom: 1px solid var(--border); align-items:center;}
.viewer-canvas-container {flex:1; overflow:auto; background:#333; display:flex; justify-content:center; padding: 20px; align-items:flex-start; position: relative;}
canvas#doc-canvas {background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.3); max-width: 100%; cursor: crosshair;}
.tool-btn {padding: 6px 12px; font-size: 12px; border: 1px solid var(--border); border-radius: 6px; background: var(--surface); cursor: pointer; transition: 0.15s;}
.tool-btn:hover {background: var(--surface2);}
.tool-btn.active {background: #FFF176; border-color: #FBC02D; font-weight: 600;}

#selector-modal .modal-content {width: 500px;}
#ai-search-modal .modal-content {width: 650px;}

::-webkit-scrollbar{width:6px; height:6px;}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#C8C2B8;border-radius:10px}
::-webkit-scrollbar-thumb:hover{background:#9E9890;}
</style>
</head>
<body>
<div class="app-shell">

<!-- Topbar -->
<div class="topbar">
  <span class="logo">SkripsiAI</span>
  <div class="topbar-div"></div>
  <div class="breadcrumb"><span>Chapter Studio</span><span>›</span><strong>Dokumen Aktif</strong></div>
  <div class="topbar-right">
    <div class="streak-badge">🔥 7 hari</div>
    <div class="pom-widget">
      <div class="pom-dot" id="pom-dot"></div>
      <span class="pom-time" id="pom-display">25:00</span>
      <button class="pom-btn-sm" id="pom-start-btn" onclick="togglePom()">Mulai</button>
      <button class="pom-btn-sm" onclick="resetPom()">↺</button>
    </div>
    <button class="btn" onclick="switchMain('preview')">👁 Pratinjau</button>
    <button class="btn btn-accent" onclick="openExportModal()">⬇ Print / PDF</button>
  </div>
</div>

<!-- Sidebar -->
<div class="sidebar">
  <div class="sidebar-section-title">Struktur Dokumen (Drag & Drop)</div>
  <div id="tree-root"></div>
</div>

<!-- Main -->
<div class="main">
  <div class="main-tabs">
    <div class="main-tab active" onclick="switchMain('editor')">✏️ Editor</div>
    <div class="main-tab" onclick="switchMain('preview')">📄 Pratinjau Skripsi</div>
  </div>
  <div class="editor-panel" id="tab-editor">
    
    <div class="thesis-title-box">
      <label class="thesis-title-label">Judul Skripsi / Topik Utama</label>
      <textarea id="thesis-title-input" class="thesis-title-input" rows="2" placeholder="Masukkan Judul Skripsi Anda di sini..." oninput="updThesisTitle(this.value)"></textarea>
      <div style="font-size:11px; color:var(--text3); margin-top:4px">Konteks ini akan digunakan AI untuk semua fitur (Parafrase, Lanjutkan Teks, Ringkasan, dll).</div>
      <div class="autosave-indicator" id="title-autosave" style="position:absolute; bottom:16px; right:18px"><div class="autosave-dot"></div>Tersimpan</div>
    </div>

    <!-- Paste Zone -->
    <div class="paste-zone" id="paste-zone-container">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:7px;">
        <div class="paste-zone-label" style="margin-bottom:0;">📋 Tempel draf Anda untuk dilanjutkan atau dirapikan AI</div>
        <button class="close-btn" onclick="document.getElementById('paste-zone-container').style.display='none'" title="Tutup area ini">✕</button>
      </div>
      <textarea class="paste-textarea" id="paste-input" placeholder="Paste teks dari Word / PDF..."></textarea>
      <div class="paste-actions">
        <button class="btn btn-accent" onclick="pecahDenganAI()">✦ Masukkan ke Sub-Bab Baru</button>
        <button class="btn" onclick="document.getElementById('paste-input').value=''">Bersihkan</button>
        <div class="autosave-indicator" id="global-autosave"><div class="autosave-dot"></div>Tersimpan</div>
      </div>
    </div>

    <div id="sections-root"></div>
    <div class="add-section-row">
      <button class="add-section-btn" onclick="addBab()">＋ Tambah Bab</button>
      <button class="add-section-btn" onclick="addSubbab(null)">＋ Tambah Sub-Bab</button>
    </div>
  </div>
  <div class="editor-panel hidden" id="tab-preview">
    <div class="preview-toolbar">
      <span class="preview-label">Pratinjau Skripsi (A4 Standar)</span>
      <select id="preview-spacing" class="settings-select" style="width:auto; height:28px; font-size:11px;" onchange="renderPreview()">
        <option value="1.5">Spasi 1.5</option>
        <option value="2.0">Spasi 2.0</option>
      </select>
      <button class="btn" onclick="copyFullText()">📋 Salin teks</button>
      <button class="btn btn-accent" onclick="openExportModal()">⬇ Print / Unduh PDF</button>
      <span style="font-size:11px;color:var(--text3); margin-left:auto;">• Margin 4-3-3-3 cm</span>
    </div>
    <div id="preview-wrap"></div>
  </div>
</div>

<!-- Right Panel -->
<div class="right-panel">
  <div class="rp-tabs">
    <div class="rp-tab active" onclick="switchRp('copilot',this)">Copilot</div>
    <div class="rp-tab" onclick="switchRp('pustaka',this)">📚 Pustaka</div>
    <div class="rp-tab" onclick="switchRp('sitasi',this)">Sitasi</div>
    <div class="rp-tab" onclick="switchRp('settings',this)">⚙️ AI</div>
  </div>
  
  <div class="rp-body" id="rp-copilot">
    <div class="rp-sec">Tanya Copilot</div>
    <textarea class="cop-ta" id="copilot-q" placeholder="Tanya sesuatu tentang skripsi..."></textarea>
    <button class="cop-send" onclick="sendCopilot()">Kirim ke AI ↗</button>
    <div id="copilot-history" style="margin-top:10px; display:flex; flex-direction:column; gap:8px;"></div>
  </div>

  <div class="rp-body hidden" id="rp-pustaka">
    <div class="rp-sec">Koleksi Referensi Anda</div>
    <div style="font-size:11px; color:var(--text3); margin-bottom:12px; line-height:1.5">Semua dokumen yang disematkan akan terkumpul rapi di sini.</div>
    
    <div id="pustaka-stats" style="font-size:11px; margin-bottom:8px; color:var(--accent); font-weight:600;"></div>
    
    <input type="text" id="pustaka-search" placeholder="Cari judul atau file..." oninput="renderPustaka()" class="settings-input" style="margin-bottom:8px; margin-top:0;">
    
    <select id="pustaka-sort" onchange="renderPustaka()" class="settings-select" style="margin-bottom:12px;">
      <option value="bab">Urutkan: Per Bab</option>
      <option value="newest">Urutkan: Terbaru Ditambahkan</option>
      <option value="az">Urutkan: Judul A - Z</option>
    </select>

    <div id="pustaka-list" style="display:flex; flex-direction:column; gap:0;"></div>
  </div>
  
  <div class="rp-body hidden" id="rp-sitasi">
    <div class="rp-sec">Format sitasi</div>
    <div class="cite-fmt-bar">
      <button class="cite-fmt-btn active" onclick="selFmt('apa',this)">APA</button>
      <button class="cite-fmt-btn" onclick="selFmt('ieee',this)">IEEE</button>
      <button class="cite-fmt-btn" onclick="selFmt('chicago',this)">Chicago</button>
    </div>
    <div id="cite-list"></div>
    <button class="btn btn-accent" style="width:100%;margin-top:8px;font-size:12px" onclick="genAllCites()">Generate semua daftar pustaka</button>
  </div>
  
  <div class="rp-body hidden" id="rp-settings">
    <div class="rp-sec">Pilih Mesin & Model AI</div>
    <div style="margin-bottom:8px;">
      <label style="font-size:11px;color:var(--text2);">Provider AI</label>
      <select id="ai-provider" class="settings-select" onchange="updateModelDropdown(); saveAISettings();">
        <option value="gemini">Google Gemini (Default)</option>
        <option value="claude">Anthropic Claude</option>
        <option value="openai">OpenAI ChatGPT</option>
      </select>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:11px;color:var(--text2);">Model AI</label>
      <select id="ai-model" class="settings-select" onchange="saveAISettings()"></select>
    </div>

    <div class="rp-sec">Kunci API (API Keys)</div>
    <div style="margin-bottom:8px;"><label style="font-size:11px;color:var(--text2);">Gemini API Key</label><input type="password" id="key-gemini" class="settings-input" placeholder="AIzaSy..." onchange="saveAISettings()"></div>
    <div style="margin-bottom:8px;"><label style="font-size:11px;color:var(--text2);">Claude API Key</label><input type="password" id="key-claude" class="settings-input" placeholder="sk-ant-..." onchange="saveAISettings()"></div>
    <div style="margin-bottom:12px;"><label style="font-size:11px;color:var(--text2);">OpenAI API Key</label><input type="password" id="key-openai" class="settings-input" placeholder="sk-proj-..." onchange="saveAISettings()"></div>
    
    <button class="btn btn-accent" style="width:100%;font-size:12px" onclick="saveAISettings();showToast('Pengaturan AI berhasil disimpan!')">Simpan Pengaturan</button>
  </div>
</div>
</div>

<!-- ================= MODALS ================= -->

<!-- Modal: Advanced Paraphrase -->
<div class="modal-overlay" id="adv-paraphrase-modal">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title">✨ Studio Parafrase AI</div>
      <button class="close-btn" onclick="closeParaphraseModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Pilih Gaya Penulisan</label>
          <select id="para-style" class="settings-select">
            <option value="Akademis Formal">Akademis Formal (Baku)</option>
            <option value="Teknis Ilmiah">Teknis Ilmiah (Jurnal)</option>
            <option value="Lebih Sederhana">Lebih Sederhana (Mudah dipahami)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tingkat Intensitas</label>
          <select id="para-intensity" class="settings-select">
            <option value="Ringan (Hanya ubah sedikit kosakata)">Ringan (Ubah Sinonim)</option>
            <option value="Medium (Ubah struktur kalimat namun menjaga urutan)">Medium (Ubah Struktur)</option>
            <option value="Total (Tulis ulang penuh secara ekstensif)">Total (Tulis Ulang Penuh)</option>
          </select>
        </div>
        <button class="btn btn-accent" style="padding: 0 16px; height:34px;" onclick="doParaphrase()">✦ Generate Parafrase</button>
      </div>

      <div class="side-by-side">
        <div class="side-col">
          <div class="side-col-title">Teks Original Anda</div>
          <div class="diff-box" id="para-original-text"></div>
        </div>
        <div class="side-col">
          <div class="side-col-title">Hasil AI (Bisa Anda Edit)</div>
          <div class="diff-box editable" contenteditable="true" id="para-result-text">
            <span style="color:var(--text3); font-style:italic">Hasil parafrase akan muncul di sini...</span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn" onclick="closeParaphraseModal()">Batal</button>
      <button class="btn btn-accent" id="btn-apply-para" style="display:none;" onclick="applyParaphrase()">✓ Terapkan ke Editor</button>
    </div>
  </div>
</div>

<!-- Modal: Advanced Continue -->
<div class="modal-overlay" id="adv-continue-modal">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title">✦ Auto Lanjutkan Teks (Context-Aware)</div>
      <button class="close-btn" onclick="closeContinueModal()">✕</button>
    </div>
    <div class="modal-body">
      <div style="font-size:12px; color:var(--text2); margin-bottom:12px; line-height:1.5;">
        AI akan membaca <strong>Outline Skripsi</strong> Anda di sidebar untuk memastikan paragraf lanjutan yang dihasilkan selaras dengan arah dan konteks bab-bab lainnya.
      </div>
      
      <div class="form-row">
        <div class="form-group" style="max-width: 250px;">
          <label class="form-label">Panjang Teks Lanjutan</label>
          <select id="cont-length" class="settings-select">
            <option value="Pendek (tepat 1 paragraf, sekitar 50-80 kata)">Pendek (1 Paragraf)</option>
            <option value="Sedang (2-3 paragraf, detail sedang)">Sedang (2-3 Paragraf)</option>
            <option value="Panjang (4 paragraf atau lebih, sangat mendalam dan komprehensif)">Panjang (4+ Paragraf)</option>
          </select>
        </div>
        <button class="btn btn-accent" style="padding: 0 16px; height:34px;" onclick="doAutoContinue()">✦ Generate Lanjutan</button>
      </div>

      <div class="side-col-title" style="margin-top:10px;">Pratinjau Hasil Lanjutan</div>
      <div class="diff-box" id="cont-preview-box">
        <span style="color:var(--text3); font-style:italic">Klik "Generate" untuk melihat teks yang ditambahkan...</span>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn" onclick="closeContinueModal()">Batal</button>
      <button class="btn btn-accent" id="btn-apply-cont" style="display:none;" onclick="applyContinue()">✓ Masukkan ke Editor</button>
    </div>
  </div>
</div>

<!-- Modal: Export PDF -->
<div class="modal-overlay" id="export-modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <div class="modal-title">⬇ Export / Cetak Skripsi</div>
      <button class="close-btn" onclick="document.getElementById('export-modal').classList.remove('show')">✕</button>
    </div>
    <div class="modal-body">
      <div style="font-size:12px; color:var(--text2); margin-bottom:12px;">Lengkapi data halaman sampul sebelum mencetak dokumen atau mengunduh PDF.</div>
      <div class="form-group" style="margin-bottom:10px;">
        <label class="form-label">Nama Lengkap</label>
        <input type="text" id="exp-name" class="settings-input" placeholder="Misal: Budi Santoso">
      </div>
      <div class="form-group" style="margin-bottom:10px;">
        <label class="form-label">NIM</label>
        <input type="text" id="exp-nim" class="settings-input" placeholder="Misal: 123456789">
      </div>
      <div class="form-group" style="margin-bottom:10px;">
        <label class="form-label">Universitas / Fakultas / Program Studi</label>
        <textarea id="exp-univ" class="settings-input" style="height:70px; resize:none; padding-top:8px;" placeholder="PROGRAM STUDI INFORMATIKA&#10;FAKULTAS ILMU KOMPUTER&#10;UNIVERSITAS INDONESIA"></textarea>
      </div>
      <div class="form-group" style="margin-bottom:10px;">
        <label class="form-label">Tahun Pengajuan</label>
        <input type="text" id="exp-year" class="settings-input" placeholder="Misal: 2026">
      </div>
    </div>
    <div class="modal-footer" style="flex-direction: column; gap: 8px;">
      <button class="btn btn-accent" style="width: 100%; padding:10px; font-weight:600;" onclick="doPrint()">🖨 Print / Simpan sebagai PDF (Sangat Disarankan)</button>
      <button class="btn" style="width: 100%; padding:10px;" onclick="doExportPDF()">⬇ Download via html2pdf</button>
      <div style="font-size:10px; color:var(--text3); text-align:center;">Gunakan opsi Print untuk mendapatkan layout "Full Text" utuh karena fitur html2pdf terbatas pada file ukuran panjang.</div>
    </div>
  </div>
</div>

<!-- Modal Viewer -->
<div class="modal-overlay" id="viewer-modal">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title" id="viewer-title">Penampil Dokumen</div>
      <button class="close-btn" onclick="closeViewer()">✕</button>
    </div>
    <div class="viewer-toolbar" id="viewer-toolbar-el">
      <button class="tool-btn" id="btn-highlighter" onclick="toggleHighlighter()">✏️ Mode Stabilo (Off)</button>
      <button class="tool-btn" onclick="clearCanvasDrawings()">🗑 Hapus Coretan</button>
      <button class="tool-btn btn-accent" onclick="downloadScreenshot()" style="margin-left:auto; background:var(--accent); color:#fff; border:none;">📸 Unduh Screenshot</button>
      <div id="pdf-pagination" style="display:none; align-items:center; gap:8px; margin-left:10px; font-size:12px;">
        <button class="tool-btn" onclick="changePage(-1)">◀ Prev</button>
        <span id="page-num">1</span> / <span id="page-count">1</span>
        <button class="tool-btn" onclick="changePage(1)">Next ▶</button>
      </div>
    </div>
    <div class="viewer-canvas-container" id="canvas-container">
      <canvas id="doc-canvas"></canvas>
      <div id="link-viewer-content" style="display:none; width:100%; max-width:600px; background:var(--surface); padding:24px; border-radius:12px; color:var(--text); box-shadow:var(--shadow-md); margin-top:20px;"></div>
    </div>
  </div>
</div>

<div class="modal-overlay" id="selector-modal">
  <div class="modal-content"><div class="modal-header"><div class="modal-title">Pilih Referensi</div><button class="close-btn" onclick="closeSelector()">✕</button></div><div class="modal-body"><div id="selector-list" class="selector-list"></div></div></div>
</div>

<div class="modal-overlay" id="ai-search-modal">
  <div class="modal-content">
    <div class="modal-header"><div class="modal-title">Cari Jurnal via AI</div><button class="close-btn" onclick="closeAISearch()">✕</button></div>
    <div class="modal-body" style="display:flex; flex-direction:column; gap:10px;">
      <p style="font-size:12px; color:var(--text2); margin-bottom:4px;">AI akan mencarikan jurnal berdasarkan teks yang Anda blok. <strong>Sitasi bernomor otomatis (Footnote)</strong> akan disisipkan langsung ke editor Anda.</p>
      <div id="ai-search-topic-display" style="font-style:italic; padding:8px; border-left:3px solid var(--accent); background:var(--surface2); border-radius:4px; font-size:12px;"></div>
      
      <div class="form-row" style="margin-bottom:0;">
        <div class="form-group">
          <label class="form-label">Bahasa</label>
          <select id="ai-search-lang" class="settings-select">
            <option value="id">Indonesia</option>
            <option value="en">Internasional (Inggris)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Tahun Terbit</label>
          <select id="ai-search-year" class="settings-select">
            <option value="2021">2021 - Sekarang</option>
            <option value="2022">2022 - Sekarang</option>
            <option value="2023">2023 - Sekarang</option>
            <option value="2024">2024 - Sekarang</option>
            <option value="2025">2025 - Sekarang</option>
          </select>
        </div>
      </div>

      <label style="font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer; color:var(--text2);"><input type="checkbox" id="ai-search-web"> Sertakan website terpercaya</label>
      
      <div style="background:var(--gold-light); color:var(--gold); padding:8px 12px; border-radius:6px; font-size:11px; line-height:1.4; border:1px solid #E6C96A; margin-top:4px;">
        <strong>⚠️ Perhatian:</strong> AI dapat menghasilkan referensi fiktif (halusinasi). Harap klik tombol <strong>"Cek URL Asli"</strong> untuk memverifikasi tautan secara manual sebelum menambahkannya ke pustaka.
      </div>

      <button class="btn btn-accent" style="padding:10px; font-size:13px; margin-top:4px;" onclick="doAISearch()">🔍 Mulai Pencarian</button>
      <div id="ai-search-results" style="margin-top:10px; display:flex; flex-direction:column; gap:10px;"></div>
    </div>
  </div>
</div>

<div class="ai-thinking" id="ai-thinking"><div class="ai-thinking-card"><div class="ai-spinner"></div><div class="ai-thinking-text" id="ai-thinking-text">AI sedang menganalisis...</div></div></div>
<div class="toast" id="toast"></div>

<script>
// KEYBOARD SHORTCUTS
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); save(); showToast('✓ Tersimpan manual (Ctrl+S)'); }
});

// UTILITIES & INIT
async function fetchWithRetry(url, options = {}, retries = 5, backoff = 1000) {
  try { 
    const response = await fetch(url, options); 
    if (!response.ok) throw new Error('Network Error: ' + response.status); 
    return response; 
  } catch (error) { 
    if (retries === 0) throw error; 
    await new Promise(res => setTimeout(res, backoff)); 
    return fetchWithRetry(url, options, retries - 1, backoff * 2); 
  }
}

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxMenNaAZf3Z6NORvZvtW3Ga2Ducu8LMynJ5o7yvpdjTWHEVDPpUmPUMjgsWnNF8tQ2WA/exec';
const defaultApiKey = "";

let sessionId = localStorage.getItem('skripsi_sid');
if (!sessionId) { 
  sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9); 
  localStorage.setItem('skripsi_sid', sessionId); 
}

let S = { 
  thesisTitle: '', 
  sections: [], 
  citeFormat: 'apa', 
  aiCallCount: 0, 
  paraEditCount: 0, 
  pomSec: 25*60, 
  pomRunning: false, 
  pomInterval: null, 
  literature: [] 
};

let idb;

function initDB(callback) {
  const req = indexedDB.open("SkripsiAILib", 1);
  req.onupgradeneeded = e => { 
    const db = e.target.result; 
    if(!db.objectStoreNames.contains("files")) {
      db.createObjectStore("files", {keyPath: "id"}); 
    }
  };
  req.onsuccess = e => { 
    idb = e.target.result; 
    if(callback) callback(); 
  };
}

function saveFileToDB(id, data, meta, callback) {
  if(!idb) return; 
  const tx = idb.transaction("files", "readwrite");
  tx.objectStore("files").put({id: id, data: data, name: meta.name, type: meta.type, annotations: meta.annotations || {}}); 
  tx.oncomplete = () => { if(callback) callback(); };
}

function getFileFromDB(id, callback) {
  if(!idb) { callback(null); return; } 
  const req = idb.transaction("files", "readonly").objectStore("files").get(id);
  req.onsuccess = e => callback(e.target.result ? e.target.result : null);
}

function getAllFilesFromDB(callback) {
  if(!idb) { callback([]); return; } 
  const req = idb.transaction("files", "readonly").objectStore("files").getAll();
  req.onsuccess = e => callback(e.target.result || []);
}

async function init(){
  loadAISettings(); 
  initDB(() => { renderPustaka(); });
  
  S.thesisTitle = localStorage.getItem('skripsi_title') || '';
  const titleInput = document.getElementById('thesis-title-input'); 
  if(titleInput) titleInput.value = S.thesisTitle;

  showThinking('Memuat data...');
  try {
    const res = await fetchWithRetry(`${GAS_URL}?action=getDocument&sessionId=${sessionId}`); 
    const data = await res.json();
    if (data.ok && data.sections) {
      S.sections = data.sections; 
    } else {
      S.sections = JSON.parse(localStorage.getItem('skripsi_v2')||'null')||defaultSections();
    }
  } catch(e) { 
    S.sections = JSON.parse(localStorage.getItem('skripsi_v2')||'null')||defaultSections(); 
  }

  S.sections.forEach(bab => {
    if(bab.children) { 
      bab.children.forEach(sub => {
        if(!sub.attachments) sub.attachments = []; 
        if(sub.text === undefined) sub.text = '';
        if(sub.text && !sub.text.includes('<br>') && !sub.text.includes('<p>')) {
          sub.text = sub.text.replace(/\n/g, '<br>');
        }
      });
    }
  });

  try {
    const resLit = await fetchWithRetry(`${GAS_URL}?action=getAll&sessionId=${sessionId}`, {}, 2, 500); 
    const dataLit = await resLit.json();
    if (dataLit.ok && dataLit.literature && dataLit.literature.length > 0) {
      S.literature = dataLit.literature;
    }
  } catch(e) {}
  
  hideThinking(); 
  render(); 
  renderCitations(); 
  updateStats();
}

function updThesisTitle(val) {
  S.thesisTitle = val; 
  localStorage.setItem('skripsi_title', val);
  const el = document.getElementById('title-autosave');
  if(el) { 
    el.classList.add('show'); 
    setTimeout(()=>el.classList.remove('show'), 2000); 
  } 
  debouncedSave();
}

function mkAiData(){
  return{ringkasan:'',hafalan:[],presentasi:{opening:'',isi:'',penutup:''},presentasiSaved:false};
}

function defaultSections(){
  return[{
    id:'s1',
    type:'bab',
    title:'BAB I PENDAHULUAN',
    children:[{
      id:'s2',
      type:'subbab',
      title:'1.1 Latar Belakang',
      text:'',
      attachments:[],
      aiData:mkAiData()
    }]
  }];
}

// AI CONFIG & CALLER
const AI_MODELS = {
  gemini: [{id:'gemini-1.5-flash',name:'Gemini 1.5 Flash'},{id:'gemini-1.5-pro',name:'Gemini 1.5 Pro'},{id:'gemini-2.5-flash',name:'Gemini 2.5 Flash'}],
  claude: [{id:'claude-3-haiku-20240307',name:'Claude 3 Haiku'},{id:'claude-3-5-sonnet-20241022',name:'Claude 3.5 Sonnet'}],
  openai: [{id:'gpt-4o-mini',name:'GPT-4o Mini'},{id:'gpt-4o',name:'GPT-4o'}]
};

function updateModelDropdown() {
  const provider = document.getElementById('ai-provider').value; 
  const modelSelect = document.getElementById('ai-model'); 
  modelSelect.innerHTML = '';
  if(AI_MODELS[provider]) {
    AI_MODELS[provider].forEach(m => { 
      const opt = document.createElement('option'); 
      opt.value = m.id; 
      opt.textContent = m.name; 
      modelSelect.appendChild(opt); 
    });
  }
}

function loadAISettings() {
  document.getElementById('ai-provider').value = localStorage.getItem('ai_provider') || 'gemini'; 
  updateModelDropdown();
  const savedModel = localStorage.getItem('ai_model'); 
  if(savedModel) document.getElementById('ai-model').value = savedModel;
  ['gemini','claude','openai'].forEach(p => {
    document.getElementById(`key-${p}`).value = localStorage.getItem(`ai_key_${p}`) || '';
  });
}

function saveAISettings() {
  localStorage.setItem('ai_provider', document.getElementById('ai-provider').value); 
  localStorage.setItem('ai_model', document.getElementById('ai-model').value);
  ['gemini','claude','openai'].forEach(p => {
    localStorage.setItem(`ai_key_${p}`, document.getElementById(`key-${p}`).value);
  });
}

async function callAI(prompt, thinkingText) {
  showThinking(thinkingText || 'AI sedang menganalisis...'); 
  S.aiCallCount++; 
  updateStats();
  
  const provider = localStorage.getItem('ai_provider') || 'gemini'; 
  const modelId = localStorage.getItem('ai_model') || (provider === 'gemini' ? 'gemini-1.5-flash' : provider === 'claude' ? 'claude-3-haiku-20240307' : 'gpt-4o-mini');
  const activeThesisContext = S.thesisTitle ? `\n\nJUDUL SKRIPSI MAHASISWA: "${S.thesisTitle}".` : '';
  const sysPrompt = "Anda adalah asisten penulisan skripsi." + activeThesisContext + "\nHanya kembalikan output langsung tanpa teks pengantar.";

  try {
    let resultText = '';
    if (provider === 'gemini') {
      const activeKey = localStorage.getItem('ai_key_gemini') || defaultApiKey; 
      if (!activeKey) throw new Error("API Key Gemini belum diisi!");
      
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${activeKey}`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ 
          contents: [{ parts: [{ text: prompt }] }], 
          systemInstruction: { parts: [{ text: sysPrompt }] } 
        }) 
      });
      
      const data = await res.json(); 
      if (!res.ok) throw new Error(data.error?.message || "Gagal"); 
      resultText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } 
    else if (provider === 'claude') {
      const activeKey = localStorage.getItem('ai_key_claude'); 
      if (!activeKey) throw new Error("API Key Claude belum diisi!");
      
      const res = await fetch('https://api.anthropic.com/v1/messages', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          'x-api-key': activeKey, 
          'anthropic-version': '2023-06-01', 
          'anthropic-dangerous-direct-browser-access': 'true' 
        }, 
        body: JSON.stringify({ 
          model: modelId, 
          max_tokens: 1500, 
          system: sysPrompt, 
          messages: [{ role: 'user', content: prompt }] 
        }) 
      });
      
      const data = await res.json(); 
      if (!res.ok) throw new Error(data.error?.message || "Gagal"); 
      resultText = data.content?.[0]?.text || '';
    }
    else if (provider === 'openai') {
      const activeKey = localStorage.getItem('ai_key_openai'); 
      if (!activeKey) throw new Error("API Key OpenAI belum diisi!");
      
      const res = await fetch('https://api.openai.com/v1/chat/completions', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${activeKey}` 
        }, 
        body: JSON.stringify({ 
          model: modelId, 
          messages: [ 
            { role: 'system', content: sysPrompt }, 
            { role: 'user', content: prompt } 
          ] 
        }) 
      });
      
      const data = await res.json(); 
      if (!res.ok) throw new Error(data.error?.message || "Gagal"); 
      resultText = data.choices?.[0]?.message?.content || '';
    }
    
    hideThinking(); 
    return resultText;
  } catch(e) { 
    hideThinking(); 
    showToast(`Error AI: ${e.message}`); 
    return ''; 
  }
}

function getThesisOutline() {
  let out = []; 
  S.sections.forEach(b => { 
    out.push(`- ${b.title}`); 
    (b.children || []).forEach(s => out.push(`  * ${s.title}`)); 
  }); 
  return out.join('\n');
}

// ADVANCED PARAPHRASE (MODAL)
let advParaCtx = { subId: null, range: null, type: 'full', originalText: '' };

function openParaphraseModal(subId) {
    const sel = window.getSelection(); 
    const sub = findSec(subId);
    advParaCtx.subId = subId;
    
    document.getElementById('para-result-text').innerHTML = '<span style="color:var(--text3); font-style:italic">Hasil parafrase akan muncul di sini...</span>';
    document.getElementById('btn-apply-para').style.display = 'none';

    if(sel.rangeCount > 0 && sel.toString().trim().length > 0 && document.getElementById('ta-'+subId).contains(sel.anchorNode)) {
        advParaCtx.range = sel.getRangeAt(0).cloneRange(); 
        advParaCtx.type = 'partial'; 
        advParaCtx.originalText = sel.toString();
    } else {
        advParaCtx.range = null; 
        advParaCtx.type = 'full'; 
        advParaCtx.originalText = sub.text.replace(/<[^>]*>?/gm, ' ');
    }
    
    document.getElementById('para-original-text').textContent = advParaCtx.originalText || '(Tidak ada teks yang tersedia)';
    document.getElementById('adv-paraphrase-modal').classList.add('show');
}

function closeParaphraseModal() { 
  document.getElementById('adv-paraphrase-modal').classList.remove('show'); 
}

async function doParaphrase() {
    if(!advParaCtx.originalText.trim()) { showToast('Teks asli kosong!'); return; }
    
    const styleDesc = document.getElementById('para-style').value;
    const intDesc = document.getElementById('para-intensity').value;
    
    const prompt = `Lakukan parafrase pada teks berikut ini.
Panduan Gaya Penulisan: ${styleDesc}
Tingkat Intensitas Perubahan: ${intDesc}

Kembalikan HANYA teks hasil parafrasenya saja, tanpa kata pengantar atau markdown block.

Teks Asli:
${advParaCtx.originalText}`;

    const res = await callAI(prompt, 'Memparafrase teks...');
    if(res) {
        document.getElementById('para-result-text').innerHTML = res.trim().replace(/\n/g, '<br>');
        document.getElementById('btn-apply-para').style.display = 'block';
    }
}

function applyParaphrase() {
    const sub = findSec(advParaCtx.subId); 
    if(!sub) return;
    
    const finalHtml = document.getElementById('para-result-text').innerHTML;
    
    if(advParaCtx.type === 'partial' && advParaCtx.range) {
        const editor = document.getElementById('ta-'+advParaCtx.subId); 
        editor.focus();
        const sel = window.getSelection(); 
        sel.removeAllRanges(); 
        sel.addRange(advParaCtx.range);
        document.execCommand('insertHTML', false, finalHtml);
        updSubTxt(advParaCtx.subId, editor.innerHTML);
    } else {
        sub.text = finalHtml; 
        updSubTxt(advParaCtx.subId, sub.text);
    }
    
    closeParaphraseModal(); 
    save(); 
    render(); 
    showToast('✓ Parafrase diterapkan!');
}

// ADVANCED CONTINUE (MODAL)
let advContCtx = { subId: null, babTitle: '', subTitle: '', existingText: '', newHtml: '' };

function openContinueModal(subId) {
    let sub = null, bab = null;
    for (const b of S.sections) { 
      if (b.children) { 
        const f = b.children.find(s => s.id === subId); 
        if (f) { sub = f; bab = b; break; } 
      } 
    }
    
    if (!sub || !bab) return;

    advContCtx = { 
      subId: subId, 
      babTitle: bab.title, 
      subTitle: sub.title, 
      existingText: sub.text.replace(/<[^>]*>?/gm, ' '), 
      newHtml: '' 
    };
    
    let displayOldText = sub.text || '(Belum ada teks di editor)';
    if(displayOldText.length > 500) displayOldText = "..." + displayOldText.slice(-500);

    document.getElementById('cont-preview-box').innerHTML = `
        <div style="color:var(--text2); margin-bottom:4px;">${displayOldText}</div>
        <div id="cont-new-wrap" style="display:none;" class="new-text-highlight"></div>
    `;
    
    document.getElementById('btn-apply-cont').style.display = 'none';
    document.getElementById('adv-continue-modal').classList.add('show');
}

function closeContinueModal() { 
  document.getElementById('adv-continue-modal').classList.remove('show'); 
}

async function doAutoContinue() {
    const lengthDesc = document.getElementById('cont-length').value;
    const outline = getThesisOutline();
    
    const prompt = `Sebagai asisten penulis skripsi, perhatikan Konteks Keseluruhan (Outline) berikut agar tulisan tetap koheren:
${outline}

Posisi saat ini:
- Bab: "${advContCtx.babTitle}"
- Sub-bab: "${advContCtx.subTitle}"

Teks Terakhir Penulis:
"${advContCtx.existingText}"

Tugas:
Lanjutkan teks penulis di atas. Panjang output yang diminta: ${lengthDesc}.
Pastikan sambungan kalimat logis, gaya bahasa akademis formal, dan relevan dengan konteks outline.
Kembalikan HANYA teks tambahannya (lanjutannya) saja tanpa basa-basi pengantar.`;

    const res = await callAI(prompt, 'Membaca konteks & menyusun kelanjutan...');
    if(res) {
        advContCtx.newHtml = res.trim().replace(/\n/g, '<br>');
        const wrap = document.getElementById('cont-new-wrap');
        wrap.innerHTML = advContCtx.newHtml;
        wrap.style.display = 'block';
        wrap.scrollIntoView({behavior: "smooth", block: "nearest"});
        document.getElementById('btn-apply-cont').style.display = 'block';
    }
}

function applyContinue() {
    const sub = findSec(advContCtx.subId); 
    if(!sub) return;
    
    sub.text = (sub.text ? sub.text + '<br><br>' : '') + advContCtx.newHtml;
    updSubTxt(advContCtx.subId, sub.text);
    
    closeContinueModal(); 
    save(); 
    render();
    
    setTimeout(() => { 
      scrollTo(advContCtx.subId); 
      document.getElementById('ta-' + advContCtx.subId)?.focus(); 
    }, 100);
    
    showToast('✓ Lanjutan teks diterapkan!');
}

// REFERENSI PENCARIAN AI & INLINE CITATION FOOTNOTE
let activeSearchContext = { subId: null, text: '', range: null };

function searchAIByHighlight(subId) {
  const sel = window.getSelection();
  if (!sel.toString().trim()) { 
    showToast('Blok (sorot) teks di editor terlebih dahulu untuk mencari jurnal terkait!'); 
    return; 
  }
  
  // Clone range sebelum focus hilang
  activeSearchContext = { subId: subId, text: sel.toString(), range: null };
  if (sel.rangeCount > 0) {
    activeSearchContext.range = sel.getRangeAt(0).cloneRange();
  }

  document.getElementById('ai-search-topic-display').textContent = sel.toString(); 
  document.getElementById('ai-search-results').innerHTML = '';
  document.getElementById('ai-search-modal').classList.add('show');
}

function closeAISearch() { 
  document.getElementById('ai-search-modal').classList.remove('show'); 
}

async function doAISearch() {
  const highlighted = activeSearchContext.text; 
  const incWeb = document.getElementById('ai-search-web').checked;
  const lang = document.getElementById('ai-search-lang').value;
  const year = document.getElementById('ai-search-year').value;
  const currentYear = new Date().getFullYear();
  
  const languagePrompt = lang === 'id' ? 'berbahasa Indonesia' : 'berbahasa Inggris (Internasional)';
  
  const prompt = `Carikan 3-4 referensi daftar pustaka ${languagePrompt} yang sangat relevan dengan pernyataan mahasiswa ini: "${highlighted}". Sumber harus berupa ${incWeb ? 'Artikel Jurnal Ilmiah atau Website Terpercaya' : 'Hanya Artikel Jurnal Ilmiah'} dan diterbitkan antara tahun ${year} hingga ${currentYear}. Tentukan perkiraan HALAMAN (pages) di dalam jurnal. Setiap referensi WAJIB memiliki ringkasan. Kembalikan HANYA format JSON array valid: [{"title":"Judul","authors":"Penulis","year":"Tahun","journal":"Nama Jurnal","url":"URL (Berikan link asli jurnal tersebut)","pages":"Halaman","summary":"Ringkasan"}]`;

  document.getElementById('ai-search-results').innerHTML = '<div style="text-align:center;padding:20px"><div class="ai-spinner"></div><div style="font-size:12px;color:var(--text2)">AI menelusuri artikel...</div></div>';
  
  const res = await callAI(prompt, 'Menelusuri referensi...');
  
  if(!res) { 
    document.getElementById('ai-search-results').innerHTML = '<div style="text-align:center; color:var(--red);">Gagal mencari referensi.</div>'; 
    return; 
  }
  
  try {
    const arr = JSON.parse(res.replace(/```json|```/g,'').trim()); 
    let html = '';
    
    arr.forEach((item) => {
       const payload = encodeURIComponent(JSON.stringify(item));
       html += `<div class="cop-box" style="margin-bottom:0;">
         <div style="font-weight:600; font-size:13px; margin-bottom:4px; color:var(--accent); line-height:1.4">${item.title}</div>
         <div style="font-size:11px; color:var(--text2); margin-bottom:4px">👤 ${item.authors} (${item.year}) • 📰 ${item.journal}</div>
         <div style="font-size:11px; font-weight:600; color:var(--purple); margin-bottom:6px">📌 Terdapat di: ${item.pages || 'Halaman tidak spesifik'}</div>
         <div style="font-size:11px; color:var(--text); line-height:1.5; margin-bottom:10px; background:var(--surface2); padding:6px; border-radius:6px;">${item.summary}</div>
         <div style="display:flex; gap:6px; flex-wrap:wrap;">
           <button class="btn btn-accent" style="padding:5px 10px; font-size:11px;" onclick="addAIRefToSubbab('${payload}', this, '${activeSearchContext.subId}')">➕ Tambah ke Pustaka</button>
           <a href="${item.url}" target="_blank" class="btn" style="padding:5px 10px; font-size:11px; text-decoration:none; display:flex; align-items:center; gap:4px; border-color:var(--gold); color:var(--gold); background:var(--gold-light);" onclick="alert('PENTING: Harap verifikasi keberadaan URL dan keaslian jurnal ini secara manual sebelum menambahkannya ke Pustaka. AI terkadang dapat menghasilkan referensi yang kurang akurat.')">🔍 Cek URL Asli</a>
         </div>
       </div>`;
    }); 
    
    document.getElementById('ai-search-results').innerHTML = html;
  } catch(e) { 
    document.getElementById('ai-search-results').innerHTML = '<div style="text-align:center; color:var(--red);">Format JSON salah atau AI gagal memberikan data yang valid.</div>'; 
  }
}

function addAIRefToSubbab(payloadEnc, btn, subId) {
  const item = JSON.parse(decodeURIComponent(payloadEnc)); 
  const litId = 'l_' + Date.now() + Math.floor(Math.random()*1000);
  
  S.literature.push({ 
    id: litId, 
    title: item.title, 
    authors: item.authors, 
    year: item.year, 
    journal: item.journal, 
    pages: item.pages, 
    url: item.url, 
    doi: '', 
    summary: item.summary 
  }); 

  const refNumber = S.literature.length; // Penomoran urut untuk Footnote

  const editor = document.getElementById('ta-' + subId);
  const s = findSec(subId);

  // Menambahkan inline citation (nomor footnote) ke dalam editor tepat di kalimat yang disorot
  if (activeSearchContext.range && editor && s) {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(activeSearchContext.range);

    const citeNode = document.createElement('sup');
    citeNode.innerHTML = `&nbsp;<a href="#ref-${refNumber}" style="color:var(--blue); text-decoration:none; font-weight:bold;">[${refNumber}]</a>`;
    
    activeSearchContext.range.collapse(false); // Memindahkan posisi ke akhir teks yang disorot
    activeSearchContext.range.insertNode(citeNode);

    // Menggeser kursor ke sesudah elemen yang disisipkan
    activeSearchContext.range.setStartAfter(citeNode);
    activeSearchContext.range.setEndAfter(citeNode);
    sel.removeAllRanges();
    sel.addRange(activeSearchContext.range);

    s.text = editor.innerHTML;
  } else if (s) {
    // Fallback jika tidak menemukan posisi seleksi
    s.text += ` <sup>&nbsp;<a href="#ref-${refNumber}" style="color:var(--blue); text-decoration:none; font-weight:bold;">[${refNumber}]</a></sup>`;
    if(editor) editor.innerHTML = s.text;
  }

  save();
  renderCitations();
  
  const fileId = 'f_' + Date.now(); 
  const meta = {name: item.title, type: 'link'};
  
  saveFileToDB(fileId, decodeURIComponent(payloadEnc), meta, () => {
     // Lampirkan juga ke daftar attachments sub-bab
     s.attachments = s.attachments || [];
     s.attachments.push({id: fileId, name: item.title + (item.pages ? ` (${item.pages})` : ''), type: 'link'});
     
     btn.textContent = '✓ Tersimpan'; 
     btn.disabled = true; 
     btn.style.background = 'var(--surface2)'; 
     btn.style.color = 'var(--text3)'; 
     btn.style.borderColor = 'var(--border)';

     renderPustaka();
  });
}

// ATTACHMENTS / UPLOADS / VIEWER
function triggerUpload(subId) {
  const inp = document.createElement('input'); 
  inp.type = 'file'; 
  inp.accept = 'application/pdf, image/*';
  
  inp.onchange = e => {
    const file = e.target.files[0]; 
    if(!file) return; 
    
    if (file.size > 8 * 1024 * 1024) { 
      showToast('Maksimal 8MB.'); 
      return; 
    } 
    
    showThinking('Menyimpan...');
    const reader = new FileReader();
    
    reader.onload = ev => {
      const id = 'f_' + Date.now(); 
      const typeStr = file.type.includes('pdf') ? 'pdf' : 'image';
      saveFileToDB(id, ev.target.result, {name: file.name, type: typeStr}, () => { 
        attachFileToSubbab(subId, {id: id, name: file.name, type: typeStr}); 
        hideThinking(); 
      });
    }; 
    
    reader.readAsDataURL(file);
  }; 
  
  inp.click();
}

let currentSelectorSubId = null;

function openSelectorModal(subId) {
  currentSelectorSubId = subId;
  getAllFilesFromDB(files => {
    const listEl = document.getElementById('selector-list');
    
    if(!files || files.length === 0) {
      listEl.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text3); font-style:italic;">Pustaka kosong.</div>';
    } else {
      listEl.innerHTML = files.map(f => `<div class="cop-box" style="cursor:pointer; display:flex; align-items:center; gap:10px" onclick="selectFromPustaka('${f.id}', '${xe(f.name)}', '${f.type}')"><div style="font-size:24px;">${f.type==='pdf'?'📄':f.type==='link'?'🔗':'🖼️'}</div><div style="font-weight:600; font-size:13px; word-break:break-all;">${xe(f.name)}</div><div style="margin-left:auto; background:var(--accent-light); color:var(--accent); padding:4px 10px; border-radius:20px; font-size:11px;">Pilih</div></div>`).join('');
    }
    
    document.getElementById('selector-modal').classList.add('show');
  });
}

function closeSelector() { 
  document.getElementById('selector-modal').classList.remove('show'); 
  currentSelectorSubId = null; 
}

function selectFromPustaka(fileId, fileName, fileType) { 
  if(!currentSelectorSubId) return; 
  attachFileToSubbab(currentSelectorSubId, {id: fileId, name: fileName, type: fileType}); 
  closeSelector(); 
}

function attachFileToSubbab(subId, fileMeta) {
  const s = findSec(subId); 
  if(!s) return; 
  
  s.attachments = s.attachments || [];
  if(!s.attachments.find(a => a.id === fileMeta.id)) {
    s.attachments.push(fileMeta);
  }
  
  s.text = (s.text || '') + ` &nbsp;<span style="color:var(--blue); font-weight:500;">[📎 ${fileMeta.name}]</span>&nbsp; `;
  
  save(); 
  render(); 
  renderPustaka(); 
  showToast('✓ Sematan berhasil!');
}

function deleteAttachment(subId, fileId) {
  if(!confirm('Hapus sematan referensi ini?')) return; 
  const s = findSec(subId);
  
  if(s && s.attachments) {
    const att = s.attachments.find(a => a.id === fileId);
    if (att) {
      s.text = (s.text || '').replace(new RegExp(`(&nbsp;|<[^>]*>|\\[)?📎 ${att.name}(\\]|<[^>]*>|&nbsp;)?`, 'g'), '');
    }
    s.attachments = s.attachments.filter(a => a.id !== fileId);
  } 
  
  save(); 
  render(); 
  renderPustaka();
}

let viewerState = { pdfDoc: null, pageNum: 1, canvas: null, ctx: null, isDrawing: false, highlighterOn: false, fileMeta: null, annotations: {}, currentStroke: [] };

function initViewerCanvas() {
  viewerState.canvas = document.getElementById('doc-canvas'); 
  viewerState.ctx = viewerState.canvas.getContext('2d');
  
  const getMousePos = (e) => { 
    const rect = viewerState.canvas.getBoundingClientRect(); 
    return { 
      x: (e.clientX - rect.left) * (viewerState.canvas.width / rect.width), 
      y: (e.clientY - rect.top) * (viewerState.canvas.height / rect.height) 
    }; 
  };
  
  viewerState.canvas.onmousedown = (e) => { 
    if(!viewerState.highlighterOn) return; 
    viewerState.isDrawing = true; 
    const pos = getMousePos(e);
    viewerState.currentStroke = [pos];
    viewerState.ctx.beginPath(); 
    viewerState.ctx.moveTo(pos.x, pos.y); 
    viewerState.ctx.lineWidth = 20; 
    viewerState.ctx.lineCap = 'round'; 
    viewerState.ctx.lineJoin = 'round'; 
    viewerState.ctx.strokeStyle = 'rgba(255, 235, 59, 0.5)'; 
    viewerState.ctx.globalCompositeOperation = 'multiply'; 
  };
  
  viewerState.canvas.onmousemove = (e) => { 
    if(!viewerState.isDrawing || !viewerState.highlighterOn) return; 
    const pos = getMousePos(e);
    viewerState.currentStroke.push(pos);
    viewerState.ctx.lineTo(pos.x, pos.y); 
    viewerState.ctx.stroke(); 
  };
  
  viewerState.canvas.onmouseup = () => { 
    if(!viewerState.isDrawing) return;
    viewerState.isDrawing = false; 
    viewerState.ctx.closePath(); 
    if(viewerState.currentStroke.length > 0) {
        if(!viewerState.annotations[viewerState.pageNum]) viewerState.annotations[viewerState.pageNum] = [];
        viewerState.annotations[viewerState.pageNum].push(viewerState.currentStroke);
        saveAnnotations();
    }
  }; 
  
  viewerState.canvas.onmouseout = () => { 
    if(viewerState.isDrawing) viewerState.canvas.onmouseup();
  };
}

function saveAnnotations() {
    if(!viewerState.fileMeta) return;
    viewerState.fileMeta.annotations = viewerState.annotations;
    saveFileToDB(viewerState.fileMeta.id, viewerState.fileMeta.data, viewerState.fileMeta, null);
}

function drawAnnotations(pageNum) {
    if(!viewerState.annotations || !viewerState.annotations[pageNum]) return;
    const strokes = viewerState.annotations[pageNum];
    strokes.forEach(stroke => {
        if (stroke.length === 0) return;
        viewerState.ctx.beginPath();
        viewerState.ctx.moveTo(stroke[0].x, stroke[0].y);
        viewerState.ctx.lineWidth = 20;
        viewerState.ctx.lineCap = 'round';
        viewerState.ctx.lineJoin = 'round';
        viewerState.ctx.strokeStyle = 'rgba(255, 235, 59, 0.5)';
        viewerState.ctx.globalCompositeOperation = 'multiply';
        for (let i = 1; i < stroke.length; i++) {
            viewerState.ctx.lineTo(stroke[i].x, stroke[i].y);
        }
        viewerState.ctx.stroke();
        viewerState.ctx.closePath();
    });
    viewerState.ctx.globalCompositeOperation = 'source-over';
}

function toggleHighlighter() {
  viewerState.highlighterOn = !viewerState.highlighterOn; 
  const btn = document.getElementById('btn-highlighter');
  
  if(viewerState.highlighterOn) { 
    btn.classList.add('active'); 
    btn.textContent = '✏️ Mode Stabilo (ON)'; 
    viewerState.canvas.style.cursor = 'crosshair'; 
  } else { 
    btn.classList.remove('active'); 
    btn.textContent = '✏️ Mode Stabilo (OFF)'; 
    viewerState.canvas.style.cursor = 'default'; 
  }
}

function clearCanvasDrawings() { 
  if(!confirm('Hapus semua coretan di halaman ini?')) return;
  if (viewerState.annotations && viewerState.annotations[viewerState.pageNum]) {
      viewerState.annotations[viewerState.pageNum] = [];
      saveAnnotations();
  }
  if(viewerState.pdfDoc) {
    renderPdfPage(viewerState.pageNum); 
  } else if(viewerState.fileMeta && viewerState.fileMeta.type !== 'pdf' && viewerState.fileMeta.type !== 'link') {
    openViewer(viewerState.fileMeta.id); 
  }
}

function downloadScreenshot() { 
  if(!viewerState.canvas || viewerState.canvas.style.display === 'none') { 
    showToast('Gagal Screenshoot.'); 
    return; 
  } 
  const a = document.createElement('a'); 
  a.href = viewerState.canvas.toDataURL('image/png'); 
  a.download = `Screenshot_${viewerState.fileMeta ? viewerState.fileMeta.name : 'dokumen'}.png`; 
  a.click(); 
  showToast('✓ Screenshot diunduh!'); 
}

function closeViewer() { 
  document.getElementById('viewer-modal').classList.remove('show'); 
  viewerState.pdfDoc = null; 
  viewerState.highlighterOn = false; 
  document.getElementById('btn-highlighter').classList.remove('active'); 
  document.getElementById('btn-highlighter').textContent = '✏️ Mode Stabilo (Off)'; 
}

async function openViewer(fileId) {
  showThinking('Memuat dokumen...');
  
  getFileFromDB(fileId, fileObj => {
    hideThinking(); 
    
    if(!fileObj) { 
      showToast('File tidak ditemukan.'); 
      return; 
    }
    
    viewerState.fileMeta = fileObj; 
    viewerState.annotations = fileObj.annotations || {};
    document.getElementById('viewer-title').textContent = fileObj.name; 
    document.getElementById('viewer-modal').classList.add('show');
    
    if(!viewerState.canvas) initViewerCanvas();
    
    const pagination = document.getElementById('pdf-pagination'); 
    const toolbar = document.getElementById('viewer-toolbar-el'); 
    const linkContent = document.getElementById('link-viewer-content');
    
    if (fileObj.type === 'link') {
       viewerState.canvas.style.display = 'none'; 
       toolbar.style.display = 'none'; 
       linkContent.style.display = 'block';
       
       let item; 
       try { 
         item = JSON.parse(fileObj.data); 
       } catch(e) { 
         item = {title:'Error', authors:'', summary:''}; 
       }
       
       linkContent.innerHTML = `<div style="font-size:12px; font-weight:600; color:var(--accent); text-transform:uppercase; margin-bottom:10px;">Dokumen Pustaka Virtual</div><h2 style="font-size:20px; margin-bottom:6px; line-height:1.4; color:var(--text);">${item.title}</h2><p style="font-size:13px; color:var(--text2); margin-bottom:6px;">👤 ${item.authors} (${item.year}) • 📰 ${item.journal}</p><p style="font-size:13px; font-weight:600; color:var(--purple); margin-bottom:16px;">📌 Terdapat di: ${item.pages || 'Halaman tidak spesifik'}</p><div style="background:var(--surface2); padding:16px; border-radius:8px; border:1px solid var(--border); margin-bottom:20px;"><div style="font-size:12px; font-weight:600; color:var(--text); margin-bottom:6px;">RINGKASAN:</div><div style="font-size:14px; line-height:1.7; color:var(--text); text-align:justify;">${item.summary}</div></div><a href="${item.url}" target="_blank" class="btn btn-accent" style="display:inline-flex; align-items:center; gap:6px; padding:10px 18px; text-decoration:none;">🔗 Buka Sumber Asli</a>`;
    } else {
       viewerState.canvas.style.display = 'block'; 
       toolbar.style.display = 'flex'; 
       linkContent.style.display = 'none';
       
       if (fileObj.type === 'pdf') {
         pagination.style.display = 'flex'; 
         
         const raw = atob(fileObj.data.substring(fileObj.data.indexOf(';base64,') + 8)); 
         const uint8Array = new Uint8Array(raw.length); 
         for (let i = 0; i < raw.length; i++) { 
           uint8Array[i] = raw.charCodeAt(i); 
         } 
         
         showThinking('Merender PDF...');
         
         window.pdfjsLib.getDocument(uint8Array).promise.then(pdf => { 
           viewerState.pdfDoc = pdf; 
           viewerState.pageNum = 1; 
           document.getElementById('page-count').textContent = pdf.numPages; 
           renderPdfPage(1); 
         }).catch(err => { 
           hideThinking(); 
           showToast('Error PDF: ' + err.message); 
         });
       } else { 
         pagination.style.display = 'none'; 
         viewerState.pdfDoc = null; 
         viewerState.pageNum = 1;
         
         const img = new Image(); 
         img.onload = () => { 
           viewerState.canvas.width = img.width; 
           viewerState.canvas.height = img.height; 
           viewerState.ctx.globalCompositeOperation = 'source-over'; 
           viewerState.ctx.clearRect(0, 0, img.width, img.height); 
           viewerState.ctx.drawImage(img, 0, 0); 
           drawAnnotations(1);
         }; 
         img.src = fileObj.data; 
       }
    }
  });
}

function renderPdfPage(num) { 
  viewerState.pdfDoc.getPage(num).then(page => { 
    const viewport = page.getViewport({ scale: 1.5 }); 
    viewerState.canvas.height = viewport.height; 
    viewerState.canvas.width = viewport.width; 
    viewerState.ctx.globalCompositeOperation = 'source-over'; 
    
    page.render({canvasContext: viewerState.ctx, viewport: viewport}).promise.then(() => { 
      hideThinking(); 
      document.getElementById('page-num').textContent = num; 
      drawAnnotations(num);
    }); 
  }); 
}

function changePage(offset) { 
  if(!viewerState.pdfDoc) return; 
  
  let target = viewerState.pageNum + offset; 
  if (target >= 1 && target <= viewerState.pdfDoc.numPages) { 
    viewerState.pageNum = target; 
    showThinking('Pindah halaman...'); 
    renderPdfPage(target); 
  } 
}

function renderPustaka() {
  const list = document.getElementById('pustaka-list'); 
  const statsEl = document.getElementById('pustaka-stats');
  const searchQ = (document.getElementById('pustaka-search')?.value || '').toLowerCase();
  const sortMode = document.getElementById('pustaka-sort')?.value || 'bab';
  
  if(!list) return; 
  
  let allAtts = [];
  let uniqueBabIds = new Set();
  
  S.sections.forEach(bab => {
    (bab.children || []).forEach(sub => { 
      if(sub.attachments) { 
        sub.attachments.forEach(a => { 
          allAtts.push({ ...a, babTitle: bab.title, babId: bab.id, subId: sub.id });
          uniqueBabIds.add(bab.id);
        }); 
      } 
    });
  });

  if (searchQ) {
    allAtts = allAtts.filter(a => a.name.toLowerCase().includes(searchQ));
  }

  if(statsEl) {
     statsEl.textContent = `Total ${allAtts.length} referensi digunakan dalam ${uniqueBabIds.size} bab.`;
  }

  if(allAtts.length === 0) {
    list.innerHTML = '<div style="font-size:12px;color:var(--text3);text-align:center;padding:20px;font-style:italic;border:1px dashed var(--border);border-radius:var(--radius)">Pustaka kosong atau file tidak ditemukan.</div>';
    return;
  }

  list.innerHTML = ''; 

  const renderItemHtml = (item) => `
    <div class="pustaka-item-wrap">
      <div class="cop-box" style="margin-bottom:0; display:flex; align-items:flex-start; gap:8px; border:none; background:transparent;">
        <div style="font-size:20px; line-height:1; cursor:pointer;" onclick="openViewer('${item.id}')">${item.type==='pdf'?'📄':item.type==='link'?'🔗':'🖼️'}</div>
        <div style="flex:1">
          <div style="font-size:12px; font-weight:600; color:var(--text); margin-bottom:4px; word-break:break-all; cursor:pointer;" onclick="openViewer('${item.id}')">${xe(item.name)}</div>
          ${sortMode !== 'bab' ? `<div style="font-size:10px; color:var(--text3); margin-bottom:4px;">Disematkan di: ${xe(item.babTitle)}</div>` : ''}
          <button class="close-btn" style="font-size:11px; padding:3px 8px; border:1px solid var(--border); border-radius:4px; margin-top:2px;" onclick="event.stopPropagation(); deleteAttachment('${item.subId}', '${item.id}')">🗑 Hapus dari Pustaka</button>
        </div>
      </div>
    </div>`;

  if (sortMode === 'bab') {
    let grouped = {};
    allAtts.forEach(a => {
      if(!grouped[a.babTitle]) grouped[a.babTitle] = [];
      grouped[a.babTitle].push(a);
    });
    
    for (let bTitle in grouped) {
      let itemsHtml = grouped[bTitle].map(renderItemHtml).join('');
      list.innerHTML += `<div class="pustaka-rak"><div class="pustaka-rak-title">📁 RAK: ${xe(bTitle).toUpperCase()}</div>${itemsHtml}</div>`;
    }
  } else {
    if (sortMode === 'az') {
      allAtts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMode === 'newest') {
      allAtts.sort((a, b) => {
         let ta = parseInt(a.id.split('_')[1] || 0);
         let tb = parseInt(b.id.split('_')[1] || 0);
         return tb - ta;
      });
    }
    let itemsHtml = allAtts.map(renderItemHtml).join('');
    list.innerHTML += `<div class="pustaka-rak" style="border:none; background:transparent;">${itemsHtml}</div>`;
  }
}

// RENDER UI (TREE & CARDS)
function render(){
  renderTree();
  renderSections();
  renderPreview();
}

let draggedId = null; 
let draggedType = null;

function tDragStart(e, id, type) { 
  draggedId = id; 
  draggedType = type; 
  e.dataTransfer.effectAllowed = 'move'; 
  e.target.classList.add('dragging'); 
}

function tDragOver(e) { 
  e.preventDefault(); 
  e.currentTarget.classList.add('drag-over'); 
}

function tDragLeave(e) { 
  e.currentTarget.classList.remove('drag-over'); 
}

function tDrop(e, targetId) { 
  e.preventDefault(); 
  e.currentTarget.classList.remove('drag-over'); 
  e.currentTarget.classList.remove('dragging'); 
  if (draggedId === targetId) return; 
  reorderTree(draggedId, targetId); 
}

function tDragEnd(e) { 
  e.target.classList.remove('dragging'); 
  document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('drag-over')); 
}

function reorderTree(srcId, targetId) {
    let srcObj = null, srcArr = null, srcIdx = -1; 
    let targetObj = null, targetArr = null, targetIdx = -1;
    
    for (let i=0; i<S.sections.length; i++) { 
      if (S.sections[i].id === srcId) { srcObj = S.sections[i]; srcArr = S.sections; srcIdx = i; break; } 
      if (S.sections[i].children) { 
        for (let j=0; j<S.sections[i].children.length; j++) { 
          if (S.sections[i].children[j].id === srcId) { srcObj = S.sections[i].children[j]; srcArr = S.sections[i].children; srcIdx = j; break; } 
        } 
      } 
      if(srcObj) break; 
    }
    
    for (let i=0; i<S.sections.length; i++) { 
      if (S.sections[i].id === targetId) { targetObj = S.sections[i]; targetArr = S.sections; targetIdx = i; break; } 
      if (S.sections[i].children) { 
        for (let j=0; j<S.sections[i].children.length; j++) { 
          if (S.sections[i].children[j].id === targetId) { targetObj = S.sections[i].children[j]; targetArr = S.sections[i].children; targetIdx = j; break; } 
        } 
      } 
      if(targetObj) break; 
    }
    
    if (!srcObj || !targetObj) return;
    
    if (srcObj.type !== targetObj.type) { 
      if (srcObj.type === 'subbab' && targetObj.type === 'bab') { 
        srcArr.splice(srcIdx, 1); 
        targetObj.children = targetObj.children || []; 
        targetObj.children.push(srcObj); 
        save(); 
        render(); 
      } 
      return; 
    }
    
    srcArr.splice(srcIdx, 1); 
    if (srcArr === targetArr && srcIdx < targetIdx) targetIdx--; 
    targetArr.splice(targetIdx, 0, srcObj); 
    save(); 
    render();
}

function renderTree(){ 
  const root=document.getElementById('tree-root');
  root.innerHTML=''; 
  S.sections.forEach(bab=>{ 
    root.appendChild(mkTN(bab,'bab')); 
    (bab.children||[]).forEach(sub=>{
      root.appendChild(mkTN(sub,'subbab'));
    }); 
  }); 
}

function mkTN(sec,type){
  const d=document.createElement('div'); 
  d.className='tree-node'+(type==='subbab'?' tree-subbab':''); 
  d.id = 'tree-' + sec.id;
  d.draggable = true; 
  d.ondragstart = (e) => tDragStart(e, sec.id, type); 
  d.ondragover = tDragOver; 
  d.ondragleave = tDragLeave; 
  d.ondrop = (e) => tDrop(e, sec.id); 
  d.ondragend = tDragEnd;
  
  d.onclick = () => { 
    scrollTo(sec.id); 
    const card = document.getElementById('sec-'+sec.id); 
    if(card) { 
      card.classList.add('highlight-card'); 
      setTimeout(()=> card.classList.remove('highlight-card'), 1500); 
    } 
  };
  
  let wcHtml = ''; 
  if (type === 'subbab') { 
    const plain = (sec.text || '').replace(/<[^>]*>?/gm, ' ').replace(/&nbsp;/g, ' '); 
    const wc = plain.trim().split(/\s+/).filter(Boolean).length; 
    wcHtml = `<span id="sb-wc-${sec.id}" style="margin-left:auto; font-size:10px; color:var(--text3); font-weight:500;">${wc} kata</span>`; 
  }
  
  d.innerHTML=`<span class="tree-icon">${{bab:'📖',subbab:'📄'}[type]}</span><span class="tree-label">${xe(sec.title)}</span>${wcHtml}`; 
  return d;
}

function renderSections(){ 
  const root=document.getElementById('sections-root');
  root.innerHTML=''; 
  S.sections.forEach(bab=>root.appendChild(renderBab(bab))); 
}

function renderBab(bab){
  const w=document.createElement('div'); 
  w.innerHTML=`<div id="sec-${bab.id}" class="section-card" style="margin-bottom:12px"><div class="section-card-header"><span class="section-type-badge badge-bab">Bab</span><input class="section-title-input" value="${xe(bab.title)}" placeholder="Judul Bab..." oninput="updTitle('${bab.id}',this.value)"><div class="section-actions"><button class="icon-btn" onclick="addSubbab('${bab.id}')">＋ sub-bab</button><button class="icon-btn danger" onclick="delSec('${bab.id}')">✕</button></div></div></div>`;
  
  const ch=document.createElement('div'); 
  ch.style.cssText='margin-left:14px;display:flex;flex-direction:column;gap:12px;margin-bottom:20px'; 
  (bab.children||[]).forEach(sub=>ch.appendChild(renderSubbab(sub)));
  
  ch.innerHTML+=`<button class="add-section-btn" style="width:100%" onclick="addSubbab('${bab.id}')">＋ Sub-Bab Baru</button>`; 
  
  const out=document.createElement('div');
  out.appendChild(w);
  out.appendChild(ch);
  return out;
}

function formatText(id, cmd) { 
  document.getElementById('ta-'+id).focus(); 
  document.execCommand(cmd, false, null); 
  updSubTxt(id, document.getElementById('ta-'+id).innerHTML); 
}

function handlePaste(e) { 
  e.preventDefault(); 
  let text = (e.originalEvent || e).clipboardData.getData('text/plain'); 
  document.execCommand('insertText', false, text); 
}

function renderSubbab(sub){
  const plainText = (sub.text||'').replace(/<[^>]*>?/gm, ' ').replace(/&nbsp;/g, ' '); 
  const wc = plainText.trim().split(/\s+/).filter(Boolean).length;
  
  const attHtml = (sub.attachments||[]).map(a => `<div class="att-chip" onclick="openViewer('${a.id}')">${a.type==='pdf'?'📄':a.type==='link'?'🔗':'🖼️'} ${xe(a.name)}<button class="att-del-btn" onclick="event.stopPropagation(); deleteAttachment('${sub.id}', '${a.id}')">✕</button></div>`).join('');
  
  const w=document.createElement('div'); 
  w.id='sec-'+sub.id;
  w.className='section-card';
  w.style.borderLeft='3px solid var(--accent)';
  
  w.innerHTML=`<div class="section-card-header" style="background:var(--accent-light)"><span class="section-type-badge badge-subbab">Sub-Bab</span><input class="section-title-input" value="${xe(sub.title)}" placeholder="Judul Sub-Bab..." oninput="updTitle('${sub.id}',this.value)" style="font-style:italic"><div class="section-actions"><button class="icon-btn danger" onclick="delSec('${sub.id}')">✕</button></div></div>
  <div class="para-content-wrap">
    <div class="para-toolbar">
       <button class="rt-btn" onmousedown="event.preventDefault(); formatText('${sub.id}', 'bold')"><b>B</b></button><button class="rt-btn" onmousedown="event.preventDefault(); formatText('${sub.id}', 'italic')"><i>I</i></button><button class="rt-btn" onmousedown="event.preventDefault(); formatText('${sub.id}', 'underline')"><u>U</u></button>
       <div style="width:1px; height:18px; background:var(--border); margin:0 4px;"></div>
       <button class="rt-btn" onmousedown="event.preventDefault(); formatText('${sub.id}', 'insertUnorderedList')">• List</button><button class="rt-btn" onmousedown="event.preventDefault(); formatText('${sub.id}', 'insertOrderedList')">1. List</button>
    </div>
    <div class="para-textarea" id="ta-${sub.id}" contenteditable="true" placeholder="Tulis isi penuh sub-bab ini di sini..." oninput="updSubTxt('${sub.id}',this.innerHTML)" onpaste="handlePaste(event)">${sub.text || ''}</div>
    <div class="para-meta"><span class="word-count-chip" id="wc-${sub.id}">${wc} kata</span><div class="autosave-indicator" id="save-${sub.id}"><div class="autosave-dot"></div>Tersimpan</div></div>
    <div class="para-ai-bar">
      <button class="para-ai-btn" onclick="saveSubManual('${sub.id}')">💾 Simpan</button>
      <button class="para-ai-btn" style="border-color:var(--blue); color:var(--blue); background:var(--blue-light)" onclick="triggerUpload('${sub.id}')">📎 Upload Referensi</button>
      <button class="para-ai-btn" style="border-color:var(--gold); color:var(--gold); background:var(--gold-light)" onmousedown="event.preventDefault(); searchAIByHighlight('${sub.id}')">🔍 Cari Jurnal via AI</button>
      <button class="para-ai-btn" onclick="openParaphraseModal('${sub.id}')">🔄 Parafrase Canggih</button>
      <button class="para-ai-btn ai-next" onclick="openContinueModal('${sub.id}')">✦ Auto Lanjutkan Teks</button>
    </div>
    ${attHtml ? `<div class="para-attachments">${attHtml}</div>` : ''}
  </div>`; 
  
  return w;
}

function switchMain(tab){ 
  document.querySelectorAll('.main-tab').forEach((t,i)=>t.classList.toggle('active',['editor','preview'][i]===tab)); 
  document.getElementById('tab-editor').classList.toggle('hidden',tab!=='editor'); 
  document.getElementById('tab-preview').classList.toggle('hidden',tab!=='preview'); 
  if(tab==='preview') renderPreview(); 
}

function switchRp(tab,btn){ 
  document.querySelectorAll('.rp-tab').forEach(t=>t.classList.remove('active')); 
  btn.classList.add('active'); 
  document.querySelectorAll('.rp-body').forEach(el=>el.classList.add('hidden')); 
  const targetPanel = document.getElementById('rp-'+tab); 
  if(targetPanel) targetPanel.classList.remove('hidden'); 
  
  if(tab==='sitasi') renderCitations(); 
  if(tab==='pustaka') renderPustaka(); 
}

function renderPreview() {
  const wrap = document.getElementById('preview-wrap');
  if(!wrap) return; 
  
  const spacing = document.getElementById('preview-spacing')?.value || '1.5';
  const spacingClass = spacing === '2.0' ? 'spacing-2' : '';
  
  if(!S.sections.length){
    wrap.innerHTML='<div style="font-size:13px;color:var(--text3);font-style:italic;text-align:center;padding:40px">Belum ada konten. Tambahkan di editor.</div>';
    return;
  }

  // A4 Wrapper
  wrap.innerHTML = `<div id="print-area" class="a4-wrapper"><div class="a4-paper ${spacingClass}" id="a4-content"></div></div>`;
  const content = document.getElementById('a4-content');

  let html = '';

  const pName = localStorage.getItem('exp_name') || '[NAMA MAHASISWA]';
  const pNim = localStorage.getItem('exp_nim') || '[NIM MAHASISWA]';
  const pUniv = (localStorage.getItem('exp_univ') || 'NAMA UNIVERSITAS\nFAKULTAS\nPROGRAM STUDI').replace(/\n/g, '<br>');
  const pYear = localStorage.getItem('exp_year') || new Date().getFullYear();

  // Halaman Sampul (Cover)
  html += `
    <div class="a4-cover">
      <div class="c-title">${S.thesisTitle || 'JUDUL SKRIPSI BELUM DITENTUKAN'}</div>
      <div class="c-logo" style="margin-bottom:1.5cm;">LOGO</div>
      <div style="font-weight:bold; margin-bottom:1.5cm;">Disusun Oleh:</div>
      <div>
        <div class="c-author">${pName}</div>
        <div class="c-nim">${pNim}</div>
      </div>
      <div style="flex:1"></div>
      <div class="c-univ">${pUniv}<br><br>${pYear}</div>
    </div>
    <div class="print-page-break"></div>
  `;

  // Daftar Isi
  html += `<div class="toc-title">DAFTAR ISI</div>`;
  S.sections.forEach((bab) => {
    html += `<div class="toc-item toc-bab"><span>${xe(bab.title).toUpperCase()}</span><div class="dots"></div><span></span></div>`;
    (bab.children || []).forEach(sub => {
      html += `<div class="toc-item" style="padding-left: 1.5cm;"><span>${xe(sub.title)}</span><div class="dots"></div><span></span></div>`;
    });
  });
  html += `<div class="print-page-break"></div>`;

  // Isi Skripsi (Bab & Subbab)
  S.sections.forEach((bab, idx) => { 
    if (idx > 0) html += `<div class="print-page-break"></div>`;
    html += `<h1>${xe(bab.title)}</h1>`;
    (bab.children || []).forEach(sub => {
      html += `<h2>${xe(sub.title)}</h2>`;
      if(!sub.text || !sub.text.replace(/<[^>]*>?/gm, '').trim()){
        html += `<p style="color:#999; font-style:italic; text-indent:0; text-align:center;">(Belum ada isi di bagian ini)</p>`;
      } else {
        html += `<div>${sub.text}</div>`;
      }
    });
  });

  // Daftar Pustaka (Bibliography Numbered Based on References Added)
  if (S.literature && S.literature.length > 0) {
     html += `<div class="print-page-break"></div>`;
     html += `<h1>DAFTAR PUSTAKA</h1>`;
     S.literature.forEach((lit, idx) => {
        html += `<div id="ref-${idx+1}" style="text-align:justify; margin-bottom:12px; padding-left: 24px; text-indent: -24px;">
                    <span style="font-weight:bold; margin-right:6px;">[${idx+1}]</span> ${fmtCite(lit, S.citeFormat)}
                 </div>`;
     });
  }

  content.innerHTML = html;
}

// ACTION & UTILS AI PROMPT
async function genRingkasan(subId){ 
  const sub=findSec(subId);
  if(!sub) return; 
  
  const txt=(sub.text||'').replace(/<[^>]*>?/gm, ' ').trim(); 
  if(!txt){ showToast('Isi teks terlebih dahulu!'); return; } 
  
  const result=await callAI(`Buatkan ringkasan akademis padat dan jelas untuk sub-bab berikut. Maksimal 3 kalimat.\n\nSub-bab: "${sub.title}"\nIsi:\n${txt}`, 'Membuat ringkasan sub-bab...'); 
  if(!result) return; 
  
  sub.aiData.ringkasan=result.trim();
  save(); 
  
  document.getElementById('ring-txt-'+subId).textContent=sub.aiData.ringkasan; 
  document.getElementById('ring-bar-'+subId).innerHTML=`<button class="btn btn-accent" style="font-size:11px;padding:5px 12px" onclick="genRingkasan('${subId}')">✦ Regenerate Ringkasan</button><button class="btn" style="font-size:11px;padding:5px 12px" onclick="copyRing('${subId}')">📋 Salin</button>`; 
}

function copyRing(subId){
  const s=findSec(subId);
  if(s?.aiData?.ringkasan) navigator.clipboard.writeText(s.aiData.ringkasan).then(()=>showToast('Ringkasan disalin!'));
}

async function genHafalan(subId){ 
  const sub=findSec(subId);
  if(!sub) return; 
  
  const txt=(sub.text||'').replace(/<[^>]*>?/gm, ' ').trim(); 
  if(!txt){ showToast('Isi teks terlebih dahulu!'); return; } 
  
  const result=await callAI(`Buat daftar 5 poin penting hafalan.\n\nSub-bab: "${sub.title}"\nIsi:\n${txt}\n\nKembalikan HANYA format JSON:\n[{"text":"Poin 1"},{"text":"Poin 2"}]`, 'Menyusun hafalan...'); 
  if(!result) return; 
  
  try{ 
    const items=JSON.parse(result.replace(/```json|```/g,'').trim()); 
    sub.aiData.hafalan=sub.aiData.hafalan||[]; 
    items.forEach(item=>sub.aiData.hafalan.push({text:item.text||'',locked:false})); 
    save(); 
    document.getElementById('haf-list-'+subId).innerHTML=buildHafalanHTML(sub); 
    showToast(`✓ Ditambahkan!`); 
  }catch(e){
    showToast('Gagal mem-parse JSON.');
  } 
}

function toggleLockHaf(subId,idx){
  const sub=findSec(subId);
  if(!sub?.aiData) return;
  sub.aiData.hafalan[idx].locked=!sub.aiData.hafalan[idx].locked;
  save();
  document.getElementById('haf-list-'+subId).innerHTML=buildHafalanHTML(sub);
}

function updHaf(subId,idx,text){
  const s=findSec(subId);
  if(s?.aiData){
    s.aiData.hafalan[idx].text=text;
    debouncedSave();
  }
}

function delHaf(subId,idx){
  const sub=findSec(subId);
  if(!sub?.aiData) return;
  if(sub.aiData.hafalan[idx].locked){
    showToast('Poin dikunci.');
    return;
  }
  sub.aiData.hafalan.splice(idx,1);
  save();
  document.getElementById('haf-list-'+subId).innerHTML=buildHafalanHTML(sub);
}

async function genPres(subId){ 
  const sub=findSec(subId);
  if(!sub) return; 
  
  const txt=(sub.text||'').replace(/<[^>]*>?/gm, ' ').trim(); 
  if(!txt){ showToast('Isi teks terlebih dahulu!'); return; } 
  
  const result=await callAI(`Skrip presentasi dosen. 1. PEMBUKAAN 2. ISI 3. PENUTUP.\n\nSub-bab: "${sub.title}"\nIsi:\n${txt}\n\nKembalikan HANYA JSON:\n{"opening":"...","isi":"...","penutup":"..."}`, 'Menyusun presentasi...'); 
  if(!result) return; 
  
  try{ 
    const data=JSON.parse(result.replace(/```json|```/g,'').trim()); 
    sub.aiData.presentasi={opening:data.opening||'',isi:data.isi||'',penutup:data.penutup||''}; 
    sub.aiData.presentasiSaved=false;
    save(); 
    
    ['po','pi','pp'].forEach(k=> { 
      let d=k==='po'?data.opening:k==='pi'?data.isi:data.penutup; 
      let el = document.getElementById(k+'-'+subId); 
      if(el){el.textContent=d||'';el.classList.remove('empty');} 
    }); 
    
    showToast('✓ Skrip presentasi siap!'); 
    document.querySelector(`#st-pres-${subId} .pres-footer`).innerHTML=`<span class="unsaved-badge">⚠ Belum disimpan</span><button class="btn btn-accent" style="font-size:11px;padding:5px 12px;margin-left:auto" onclick="savePres('${subId}')">🔒 Simpan</button><button class="btn" style="font-size:11px;padding:5px 12px" onclick="copyPres('${subId}')">📋 Salin</button>`; 
  }catch(e){
    showToast('Gagal JSON.');
  } 
}

function clearEmpty(el){
  if(el.classList.contains('empty')){
    el.textContent='';
    el.classList.remove('empty');
  }
}

function updPres(subId,field,el){
  const sub=findSec(subId);
  if(!sub?.aiData) return;
  sub.aiData.presentasi[field]=el.innerText||el.textContent||''; 
  sub.aiData.presentasiSaved=false; 
  debouncedSave();
}

function savePres(subId){
  const sub=findSec(subId);
  if(!sub?.aiData) return;
  sub.aiData.presentasiSaved=true;
  save(); 
  showToast('🔒 Script tersimpan!');
  const bg = document.querySelector(`#st-pres-${subId} .unsaved-badge`);
  if(bg){
    bg.className='saved-badge';
    bg.innerHTML='🔒 Script tersimpan';
  }
}

function copyPres(subId){
  const p=findSec(subId)?.aiData?.presentasi; 
  if(!p) return;
  navigator.clipboard.writeText(`PEMBUKAAN:\n${p.opening}\n\nINTI:\n${p.isi}\n\nPENUTUP:\n${p.penutup}`).then(()=>showToast('Disalin!'));
}

async function pecahDenganAI(){ 
  const txt=document.getElementById('paste-input').value.trim(); 
  if(!txt){showToast('Tempel teks!');return;} 
  
  const result=await callAI(`Rapikan teks ini ke dalam format akademis yang mengalir baik. \nKembalikan HANYA teksnya saja.\nTeks:\n${txt}`,'AI menyusun teks...'); 
  if(!result) return; 
  
  let sub=null; 
  const lb=S.sections[S.sections.length-1]; 
  
  if(lb&&lb.children?.length) {
    sub=lb.children[lb.children.length-1]; 
  } else if(lb) {
    const id='sb'+Date.now();
    const ns={id,type:'subbab',title:'Sub-Bab Baru',text:'',attachments:[],aiData:mkAiData()};
    lb.children=lb.children||[];
    lb.children.push(ns);
    sub=ns;
  } 
  
  if(sub){ 
    const resultHtml = result.trim().replace(/\n/g, '<br>'); 
    sub.text=(sub.text?sub.text+'<br><br>':'')+resultHtml; 
    document.getElementById('paste-input').value=''; 
    save();
    render();
    showToast(`✓ Teks ditambahkan ke ${sub.title}!`); 
  } 
}

function saveSubManual(subId) { 
  save(); 
  showAS(subId); 
  showToast('✓ Tersimpan!'); 
}

async function sendCopilot(){ 
  const q=document.getElementById('copilot-q').value.trim();
  if(!q) return; 
  
  const result=await callAI(`Pertanyaan mahasiswa: ${q}\n\nJawab singkat akademis:`,'Copilot berpikir...'); 
  if(!result) return; 
  
  const el=document.getElementById('copilot-history'); 
  el.innerHTML+=`<div class="cop-box"><div class="cop-label">✦ Copilot</div><div class="cop-text">${result.replace(/\n/g,'<br>')}</div><button class="close-btn" style="font-size:10px; margin-top:5px;" onclick="this.parentElement.remove()">🗑 Hapus</button></div>`; 
  document.getElementById('copilot-q').value='';
  showToast('✓ Terjawab!'); 
}

// SECTION CRUD
function addBab(){
  const id='b'+Date.now();
  S.sections.push({id,type:'bab',title:'BAB '+(S.sections.length+1),children:[]});
  save();
  render();
  setTimeout(()=>scrollTo(id),80);
}

function addSubbab(babId){ 
  const id='sb'+Date.now(); 
  const ns={id,type:'subbab',title:'Sub-Bab Baru',text:'',attachments:[],aiData:mkAiData()}; 
  
  if(babId){
    const b=findSec(babId);
    if(b){b.children=b.children||[];b.children.push(ns);}
  } else if(S.sections.length){
    const l=S.sections[S.sections.length-1];
    l.children=l.children||[];
    l.children.push(ns);
  } 
  
  save();
  render();
  setTimeout(()=>scrollTo(id),80); 
}

function delSec(id){
  if(!confirm('Hapus bagian ini?')) return;
  rmSec(S.sections,id);
  save();
  render();
}

function rmSec(arr,id){
  for(let i=0;i<arr.length;i++){
    if(arr[i].id===id){
      arr.splice(i,1);
      return true;
    }
    if(arr[i].children&&rmSec(arr[i].children,id)) return true;
  }
  return false;
}

function findSec(id,arr){
  arr=arr||S.sections;
  for(const s of arr){
    if(s.id===id) return s;
    if(s.children){
      const f=findSec(id,s.children);
      if(f) return f;
    }
  }
  return null;
}

function updTitle(id,val){ 
  const s=findSec(id);
  if(!s) return;
  
  s.title=val;
  debouncedSave(); 
  
  const treeLabel = document.querySelector('#tree-'+id+' .tree-label'); 
  if(treeLabel) treeLabel.textContent = val; 
  
  const pvTitle = document.querySelector('#pvb-'+id+' .preview-subbab-title'); 
  if(pvTitle) pvTitle.textContent = val; 
}

function updSubTxt(id,val){
  const s=findSec(id);
  if(!s) return; 
  
  s.text=val;
  S.paraEditCount++;
  
  const plainText = val.replace(/<[^>]*>?/gm, ' ').replace(/&nbsp;/g, ' '); 
  const wc = plainText.trim().split(/\s+/).filter(Boolean).length; 
  document.getElementById('wc-'+id).textContent = wc + ' kata';
  
  const sbWc = document.getElementById('sb-wc-'+id); 
  if(sbWc) sbWc.textContent = wc + ' kata';
  
  showAS(id);
  debouncedSave();
  updateStats(); 
}

// SAVE & SINKRONISASI
let _st; 
function debouncedSave(){
  clearTimeout(_st);
  _st=setTimeout(save,1200);
}

function save(){ 
  localStorage.setItem('skripsi_v2',JSON.stringify(S.sections)); 
  syncToGAS(); 
}

let _syncTimeout; 
function syncToGAS() { 
  clearTimeout(_syncTimeout); 
  _syncTimeout = setTimeout(async () => { 
    const g = document.getElementById('global-autosave'); 
    if(g) { 
      g.innerHTML = '<div class="autosave-dot" style="background:var(--gold)"></div>Menyimpan (Cloud)...'; 
      g.classList.add('show'); 
    } 
    
    try { 
      await fetchWithRetry(GAS_URL, { method: 'POST', body: JSON.stringify({ action: 'saveDocument', sessionId: sessionId, sections: S.sections }) }); 
      if(g) { 
        g.innerHTML = '<div class="autosave-dot"></div>Tersimpan di Cloud'; 
        setTimeout(()=>g.classList.remove('show'), 2000); 
      } 
    } catch(e) { 
      if(g) { 
        g.innerHTML = '<div class="autosave-dot" style="background:var(--red)"></div>Tersimpan (Offline)'; 
        setTimeout(()=>g.classList.remove('show'), 4000); 
      } 
    } 
  }, 2000); 
}

function showAS(id){ 
  const el=document.getElementById('save-'+id);
  if(el){
    el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'),2000);
  } 
  const g=document.getElementById('global-autosave');
  if(g){
    g.innerHTML='<div class="autosave-dot" style="background:var(--gold)"></div>Menyimpan...';
    g.classList.add('show');
    setTimeout(()=>g.classList.remove('show'),2000);
  } 
}

function scrollTo(id){ 
  document.getElementById('sec-'+id)?.scrollIntoView({behavior:'smooth',block:'center'}); 
}

// EXPORT PDF & PRINT
function openExportModal() {
  document.getElementById('exp-name').value = localStorage.getItem('exp_name') || '';
  document.getElementById('exp-nim').value = localStorage.getItem('exp_nim') || '';
  document.getElementById('exp-univ').value = localStorage.getItem('exp_univ') || '';
  document.getElementById('exp-year').value = localStorage.getItem('exp_year') || new Date().getFullYear();
  document.getElementById('export-modal').classList.add('show');
}

function saveExportMeta() {
  localStorage.setItem('exp_name', document.getElementById('exp-name').value);
  localStorage.setItem('exp_nim', document.getElementById('exp-nim').value);
  localStorage.setItem('exp_univ', document.getElementById('exp-univ').value);
  localStorage.setItem('exp_year', document.getElementById('exp-year').value);
  renderPreview(); 
}

function doPrint() {
  saveExportMeta();
  document.getElementById('export-modal').classList.remove('show');
  
  if(document.getElementById('tab-preview').classList.contains('hidden')) {
    switchMain('preview');
  }
  
  setTimeout(() => window.print(), 500);
}

function doExportPDF() {
  saveExportMeta();
  showThinking('Menyusun PDF...');
  
  if(document.getElementById('tab-preview').classList.contains('hidden')) {
    switchMain('preview');
  }

  setTimeout(() => {
    const element = document.getElementById('a4-content');
    const opt = {
      margin:       0,
      filename:     (S.thesisTitle || 'Skripsi') + '.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, windowWidth: 800 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      hideThinking();
      document.getElementById('export-modal').classList.remove('show');
      showToast('✓ PDF Berhasil diunduh!');
    }).catch(e => {
      hideThinking();
      showToast('Gagal memproses PDF: ' + e.message);
    });
  }, 800);
}

function exportPDF() { 
  openExportModal();
}

// CITATIONS
function fmtCite(lit,fmt){ 
  if(fmt==='apa') return `${lit.authors} (${lit.year}). ${lit.title}. <em>${lit.journal}</em>. https://doi.org/${lit.doi||''}`; 
  if(fmt==='ieee') return `${lit.authors}, "${lit.title}," <em>${lit.journal}</em>, ${lit.year}.`; 
  return `${lit.authors}. "${lit.title}." <em>${lit.journal}</em> (${lit.year}).`; 
}

function renderCitations(){ 
  const list=document.getElementById('cite-list');
  if(!list) return;
  list.innerHTML=''; 
  
  S.literature.forEach(lit=>{ 
    list.innerHTML+=`<div class="cite-card"><div class="cite-top"><div class="cite-title">${lit.title}</div><div class="cite-meta">${lit.authors} · ${lit.year}</div></div><div class="cite-fmt">${fmtCite(lit,S.citeFormat)}</div><div class="cite-actions"><button class="cite-btn" onclick="copyCite('${lit.id}')">📋 Salin</button><a class="cite-btn" href="${lit.url}" target="_blank">🔗 Buka</a></div></div>`; 
  }); 
}

function selFmt(fmt,btn){
  S.citeFormat=fmt;
  document.querySelectorAll('.cite-fmt-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCitations();
  if(!document.getElementById('tab-preview').classList.contains('hidden')) {
      renderPreview();
  }
}

function copyCite(litId){
  navigator.clipboard.writeText(fmtCite(S.literature.find(x=>x.id===litId),S.citeFormat).replace(/<[^>]+>/g,'')).then(()=>showToast('Sitasi disalin!'));
}

function genAllCites(){
  let t=`DAFTAR PUSTAKA\n\n`;
  S.literature.forEach(l=>t+=fmtCite(l,S.citeFormat).replace(/<[^>]+>/g,'')+'\n\n');
  navigator.clipboard.writeText(t.trim()).then(()=>showToast('Semua sitasi disalin!'));
}

function copyFullText(){
  let t='';
  S.sections.forEach(bab=>{
    t+=bab.title+'\n\n';
    (bab.children||[]).forEach(sub=>{
      t+=sub.title+'\n\n'; 
      if(sub.text) t+=(sub.text).replace(/<[^>]*>?/gm, ' ')+'\n\n';
    });
  });
  navigator.clipboard.writeText(t.trim()).then(()=>showToast('Teks disalin!'));
}

function updateStats(){ 
  let words=0,babs=0; 
  S.sections.forEach(bab=>{
    babs++;
    (bab.children||[]).forEach(sub=>{ 
      words+=(sub.text||'').replace(/<[^>]*>?/gm, ' ').trim().split(/\s+/).filter(Boolean).length; 
    });
  }); 
  fetchWithRetry(`${GAS_URL}?action=saveProgress&sessionId=${sessionId}&bab1=${babs}&bab2=${words}&bab3=${S.aiCallCount}`).catch(()=>{}); 
}

function togglePom(){ 
  const btn=document.getElementById('pom-start-btn'), dot=document.getElementById('pom-dot'); 
  
  if(S.pomRunning){
    clearInterval(S.pomInterval);
    S.pomRunning=false;
    btn.textContent='Mulai';
    btn.classList.remove('running');
    dot.classList.remove('running');
  } else {
    S.pomRunning=true;
    btn.textContent='Jeda';
    btn.classList.add('running');
    dot.classList.add('running');
    
    S.pomInterval=setInterval(()=>{
      S.pomSec--;
      if(S.pomSec<=0){
        resetPom();
        showToast('🍅 Pomodoro selesai!');
      }
      document.getElementById('pom-display').textContent=String(Math.floor(S.pomSec/60)).padStart(2,'0')+':'+String(S.pomSec%60).padStart(2,'0');
    },1000);
  } 
}

function resetPom(){
  clearInterval(S.pomInterval);
  S.pomRunning=false;
  S.pomSec=25*60;
  document.getElementById('pom-display').textContent='25:00';
  document.getElementById('pom-start-btn').textContent='Mulai';
  document.getElementById('pom-start-btn').classList.remove('running');
  document.getElementById('pom-dot').classList.remove('running');
}

function showThinking(text){
  document.getElementById('ai-thinking').classList.add('show');
  document.getElementById('ai-thinking-text').textContent=text;
}

function hideThinking(){
  document.getElementById('ai-thinking').classList.remove('show');
}

let _tt;
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;
  el.classList.add('show');
  clearTimeout(_tt);
  _tt=setTimeout(()=>el.classList.remove('show'),3200);
}

function xe(str){
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

init();
</script>
</body>
</html>
