---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Vendor-Agnostic AI as a Multi-Domain Operations Enabler
  ITEA 2026 All/Multi-Domain Operations Forum
  July 14–16, 2026 · Huntsville, Alabama
drawings:
  persist: false
transition: slide-left
title: "Vendor-Agnostic AI as a Multi-Domain Operations Enabler: Test, Integration, and Mission Engineering Across the Kill Web"
mdc: true
---

# Vendor-Agnostic AI as an MDO Enabler

**Test, Integration, and Mission Engineering Across the Kill Web**

Sam Bright · Michael Soltys

GBL Systems Corporation

ITEA All/Multi-Domain Operations Forum · July 14–16, 2026 · Huntsville, AL

*"Testing for the Arsenal of Freedom"*

---

# Vendor Lock-In Degrades the Kill Web

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

### <span style="color: #6b21a8;">When Every Node Runs a Different ML Stack</span>

<div class="border-2 border-blue-500 p-3 rounded text-sm mt-2">
<strong>Army (Project Convergence)</strong> — proprietary training frameworks, custom model formats
</div>
<div class="border-2 border-yellow-500 p-3 rounded text-sm mt-2">
<strong>Navy (Project Overmatch)</strong> — vendor-specific inference runtimes
</div>
<div class="border-2 border-green-500 p-3 rounded text-sm mt-2">
<strong>Air Force (ABMS)</strong> — single-cloud orchestration
</div>

</div>

<div>

### <span style="color: #6b21a8;">Three Failure Modes That Degrade MDO Mission Threads</span>

- **Porting latency** — a model trained for Project Convergence cannot be re-hosted for Project Overmatch without months of work
- **Cross-classification stall** — proprietary runtimes do not transfer across classification enclaves
- **Test silos** — joint test events lose reproducibility because no two services can re-run the same model on the same data

</div>

</div>

<div class="text-lg italic text-left mt-4" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
Vendor lock-in is not an acquisition inconvenience — it is a <strong>structural source of fragility in the kill web</strong>
</div>


---

# CJADC2 Requires Interoperability — AI Lock-In Prevents It

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm">

### <span style="color: #6b21a8;">The CJADC2 Mandate</span>

Integrates sensors, processors, decision aids, and effectors spanning **all five domains**: land, air, sea, space, and cyberspace.

| Domain | Capability | Lock-In Risk |
|--------|-----------|--------------|
| Land   | Target acquisition (Convergence) | Proprietary PyTorch + Azure |
| Air    | ABMS sensor fusion | Vendor-specific ONNX fork |
| Sea    | Overmatch kill-chain | Single-cloud AWS inference |
| Space  | SDA sensor mesh | Proprietary model format |
| Cyber  | AI threat detection | Platform-tied model serving |

</div>

<div>

### <span style="color: #6b21a8;">The Core Tension</span>

AI/ML compresses the sensor-to-shooter timeline — but **only if models can be re-hosted, re-evaluated, and re-integrated** across services without dependency on the original vendor.

<div class="bg-blue-100 dark:bg-blue-900 p-3 rounded mt-4 text-center text-sm">
Re-hosting. Re-evaluating. Re-integrating.<br/>Across all five domains.
</div>

</div>

</div>

<div class="text-lg italic text-left mt-4" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
Vendor-agnostic AI is not an acquisition preference — it is a <strong>structural requirement of CJADC2</strong>
</div>


---

# The Mission Engineering Primitives

### <span style="color: #6b21a8;">Four Technical Building Blocks That Restore Portability</span>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="border-2 border-blue-500 p-3 rounded text-sm">

**1. OCI-Compliant Containers**

Package ML models in Open Container Initiative images. Any OCI-compliant runtime (Docker, Podman, containerd) on any cloud or enclave can execute the workload.

</div>

<div class="border-2 border-yellow-500 p-3 rounded text-sm">

**2. ONNX Model Interchange**

The Open Neural Network Exchange format decouples training from inference. Train in PyTorch or TensorFlow; deploy anywhere ONNX Runtime runs — including air-gapped enclaves.

</div>

<div class="border-2 border-green-500 p-3 rounded text-sm">

**3. Infrastructure-as-Code**

Terraform or Pulumi definitions make deployment fully reproducible. A config for AWS GovCloud instantiates on Azure Government or on-premise with parameter changes — not a rewrite.

</div>

<div class="border-2 border-purple-500 p-3 rounded text-sm">

**4. Vendor-Neutral Experiment Tracking**

MLflow or DVC capture hyperparameters, training data references, dependency specs, and configurations — enabling vendor migration without losing institutional knowledge.

</div>

</div>

<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded mt-3 text-center text-sm">
These primitives apply at the same layer where vendor lock-in enters — and compose into a <strong>T&E reproducibility framework</strong>
</div>


---

# The T&E Reproducibility Framework

### <span style="color: #6b21a8;">Packaging for Cross-Service Re-Evaluation</span>

<div class="mt-3 text-sm">
A model packaged under this framework can be <strong>re-hosted, re-evaluated, and re-integrated</strong> by any service's test organization — without vendor dependency.
</div>

<div class="border-2 border-blue-500 p-4 rounded mt-3 mx-auto" style="max-width: 580px;">
<div class="text-center font-bold text-xs mb-3 opacity-60 tracking-wider">ML CAPABILITY PACKAGE (service-agnostic)</div>
<div class="grid grid-cols-2 gap-3">
<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded text-sm text-center"><strong>ONNX Model</strong><br/><span class="opacity-70">framework-neutral</span></div>
<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded text-sm text-center"><strong>MLflow Record</strong><br/><span class="opacity-70">experiment metadata</span></div>
<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded text-sm text-center"><strong>OCI Container</strong><br/><span class="opacity-70">portable runtime</span></div>
<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded text-sm text-center"><strong>IaC Definition</strong><br/><span class="opacity-70">Terraform config</span></div>
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">
<div class="border-l-4 border-blue-500 pl-3"><strong>Army ATEC</strong><br/><span class="opacity-70">re-host</span></div>
<div class="border-l-4 border-yellow-500 pl-3"><strong>Navy NAVAIR</strong><br/><span class="opacity-70">re-evaluate</span></div>
<div class="border-l-4 border-green-500 pl-3"><strong>Air Force AFOTEC</strong><br/><span class="opacity-70">re-integrate</span></div>
</div>

<div class="text-base italic text-left mt-3" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
<strong>Result:</strong> Any T&E organization can reproduce the test — not just the originating vendor
</div>


---

# Kill-Web Failure Taxonomy

### <span style="color: #6b21a8;">How Vendor Lock-In Breaks Specific MDO Mission Threads</span>

<div class="text-sm mt-3">

| Failure Class | MDO Thread Affected | Root Cause |
|---------------|---------------------|------------|
| **Framework Lock** | Army-to-Navy model transfer (Convergence → Overmatch) | PyTorch checkpoint cannot run on vendor B's serving stack |
| **Runtime Lock** | Air-to-Space sensor fusion (ABMS → SDA) | Vendor fork of ONNX runtime breaks spec compliance |
| **Cloud Lock** | GIDE cross-command AI sharing | Model artifact tied to AWS SageMaker lineage format |
| **Enclave Lock** | IL4 → IL6 capability promotion | Container image built with commercial-cloud libraries; no air-gapped equivalent |
| **Observation Lock** | Joint after-action review | Experiment metadata in vendor-proprietary format; cannot replay on peer infrastructure |

</div>

<div class="bg-red-100 dark:bg-red-900 p-3 rounded mt-4 text-center">
Every failure class produces the same outcome: <strong>per-service test silos</strong> that cannot be aggregated into joint mission threads
</div>


---

# Three Multi-Domain Test Contexts

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="border-2 border-blue-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">GIDE</span>
**Global Information Dominance Experiments (CDAO)**

Multi-domain AI-enabled decision superiority across combatant commands

**Lock-in impact:** Models authored for GIDE-N cannot be re-run at GIDE-N+1 if vendor serving infrastructure changes; experiment baselines break

**Framework fix:** OCI images + MLflow records as the GIDE artifact standard

</div>

<div class="border-2 border-yellow-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">ABMS</span>
**Advanced Battle Management System (Air Force)**

Sensor-to-shooter network across air and space domains

**Lock-in impact:** Proprietary inference runtimes prevent Army and Navy sensor adapters from contributing ML components without full vendor re-engagement

**Framework fix:** ONNX as the interchange format for all ABMS AI nodes

</div>

<div class="border-2 border-green-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">Project Overmatch</span>
**Kill-chain automation (Navy)**

Maritime domain kill-chain automation

**Lock-in impact:** Models ported from Project Convergence require months of re-integration; joint test windows missed

**Framework fix:** IaC definitions as the Overmatch re-hosting specification

</div>

</div>

<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded mt-4 text-center">
Vendor-agnostic packaging <strong>shortens cross-service integration timelines</strong> and produces reproducible joint test records
</div>


---

# Policy Convergence: WAS + CJADC2

### <span style="color: #6b21a8;">Two Mandates, One Engineering Answer</span>

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="border-2 border-blue-500 p-4 rounded">

### <span style="color: #6b21a8;">Warfighting Acquisition System</span>
**Secretary Hegseth — Nov 7, 2025**

- *"Maintain at least two qualified sources for critical program content"* — explicit dual-source mandate targeting lock-in
- "Speed to capability delivery is now our organizing principle"
- Commercial-first, modular, performance-based contracting

</div>

<div class="border-2 border-purple-500 p-4 rounded">

### <span style="color: #6b21a8;">CJADC2 Operational Requirements</span>

- Joint interoperability across all five domains and coalition partners
- No single service's ML stack can be the authoritative runtime for joint capabilities
- Cross-classification portability: NIPRNet IL4 through SIPRNet IL6

</div>

</div>

<div class="text-lg italic text-left mt-4" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
WAS policy + CJADC2 architecture + T&E reproducibility framework = <strong>a single codifiable standard for Joint T&E guidance</strong>
</div>


---

# Deploying Across Classification Enclaves

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="text-sm">

### <span style="color: #6b21a8;">The Enclave Portability Problem</span>

| Level | Environment | Vendor Lock-In Risk |
|-------|-------------|---------------------|
| **IL4** | NIPRNet | Cloud-specific model serving (SageMaker, Vertex AI) |
| **IL5** | NIPRNet Sensitive | US-citizen-only enclaves; some ML tooling unavailable |
| **IL6** | SIPRNet | Air-gapped; commercial cloud inference unavailable |
| **DDIL** | Tactical Edge | Disconnected; model must run on organic compute |

</div>

<div>

### <span style="color: #6b21a8;">Framework Solution Per Level</span>

<div class="border-l-4 border-blue-500 pl-3 mt-3 text-sm">
<strong>IL4 → IL5:</strong> IaC definition parameterizes cloud provider; ONNX model unchanged
</div>
<div class="border-l-4 border-yellow-500 pl-3 mt-3 text-sm">
<strong>IL5 → IL6:</strong> OCI image carries its own runtime; no internet dependency
</div>
<div class="border-l-4 border-green-500 pl-3 mt-3 text-sm">
<strong>IL6 → DDIL:</strong> Slim OCI image + quantized ONNX model fits on edge compute (Jetson, tactical GPU servers)
</div>

</div>

</div>

<div class="text-lg italic text-left mt-4" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
The same four primitives that prevent acquisition lock-in <strong>also enable cross-enclave capability promotion</strong>
</div>


---

# Recommendations for Joint T&E Guidance

### <span style="color: #6b21a8;">Codifying Vendor-Agnostic Standards</span>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="border-2 border-blue-500 p-3 rounded text-sm">

**1. Mandatory Artifact Standard**

All ML capabilities submitted for Joint T&E events must include: ONNX model export, OCI container image, IaC deployment definition, MLflow experiment record. No proprietary-only artifacts accepted.

</div>

<div class="border-2 border-yellow-500 p-3 rounded text-sm">

**2. Cross-Service Re-Evaluation Requirement**

Every AI capability in a joint test event must be re-hostable by at least one peer-service T&E organization within 30 days, using only the submitted artifact package.

</div>

<div class="border-2 border-green-500 p-3 rounded text-sm">

**3. Contract Language**

Incorporate dual-source and open-artifact requirements into AI/ML task order language. Data rights provisions must ensure government ownership of model weights and training metadata.

</div>

<div class="border-2 border-purple-500 p-3 rounded text-sm">

**4. PAE Integration**

Portfolio Acquisition Executives (established under WAS) should treat vendor-agnostic packaging as a gate criterion for AI capability advancement across program phases.

</div>

</div>

<div class="bg-blue-100 dark:bg-blue-900 p-2 rounded mt-3 text-center text-sm">
These four recommendations directly implement the WAS dual-source mandate in the AI/ML domain
</div>


---

# What T&E Practitioners Can Do Now

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="border-2 border-blue-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">Immediate (0–90 Days)</span>

- **Audit current AI/ML contracts** for vendor lock-in provisions; identify capabilities with no second source
- **Require ONNX exports** in all new AI/ML task orders as a deliverable line item
- **Stand up a multi-vendor inference evaluation** to establish a reproducibility baseline

</div>

<div class="border-2 border-yellow-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">Near-Term (90–180 Days)</span>

- **Adopt MLflow** as the experiment record standard for all AI T&E events
- **Draft IaC templates** for the most common enclave configurations (IL4 GovCloud, IL5 dedicated, IL6 on-premise GPU)
- **Include cross-service re-host** as a T&E success criterion alongside performance metrics

</div>

<div class="border-2 border-green-500 p-3 rounded text-sm">

### <span style="color: #6b21a8;">Policy Track (Ongoing)</span>

- **Engage PAEs** to incorporate vendor-agnostic packaging criteria into AI/ML source selection
- **Submit to Joint T&E community** for codification in joint test guidance
- **Align with CJADC2 architecture boards** to standardize the artifact format across services

</div>

</div>

<div class="text-base italic text-left mt-3" style="color: #2E7D32; border-left: 4px solid #2E7D32; padding-left: 16px;">
The T&E community is uniquely positioned to champion vendor-agnostic AI — through test criteria, contract language, and cross-service reproducibility standards
</div>


---
layout: end
class: text-center
---

# T&E as a Driver of MDO Resilience

### <span style="color: #6b21a8;">The Problem</span>
Proprietary ML stacks introduce fragmentation that degrades kill-web coherence — making it harder for Army, Navy, and Air Force AI to share models across services, clouds, and classification enclaves.

### <span style="color: #6b21a8;">The Framework</span>

OCI containers · ONNX interchange · Infrastructure-as-Code · Vendor-neutral experiment tracking

### <span style="color: #6b21a8;">The Ask</span>

Codify vendor-agnostic packaging in Joint T&E guidance. Make it a test criterion, not a preference.

<div class="text-xl italic mt-6" style="color: #2E7D32;">
T&E practitioners are well positioned to help build the <strong>arsenal of freedom</strong>.
</div>

<div class="mt-4 text-sm opacity-60">
Sam Bright · Michael Soltys · GBL Systems Corporation<br/>
Distribution A — Approved for Public Release
</div>
