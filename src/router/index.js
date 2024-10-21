import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/view/SignIn.vue";
import AboutUs from "@/components/AboutUs.vue";
import HeroSection from "@/components/HeroSection.vue";
import MyService from "@/components/MyService.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import WhyUs from "@/components/WhyUs.vue";
import ArticlesPage from "@/components/ArticlesPage.vue";
import FooterSite from "@/components/FooterSite.vue";
import HomePageView from "@/view/HomePageView.vue";
import DashboardPage from "@/view/DashboardPage.vue";
import DashboardPageDoctor from "@/view/DashboardPageDoctor.vue";
import SignUp from "@/view/SignUp.vue";
import AboutUsPage from "@/view/AboutUsPage.vue";
import MyHistoryPage from "@/view/MyHistoryPage.vue";
import ArticlesPageView from "@/view/ArticlesPageView.vue";
import ArticlesPageViewDoctor from "@/view/ArticlesPageViewDoctor.vue";
import DetailArticlePage from "@/view/DetailArticlePage.vue";
import ProfilePage from "@/view/ProfilePage.vue";
import PatientDetailTestCompleted from "@/view/PatientDetailTestCompleted.vue";
import PatientDetailBeingProcessed from "@/view/PatientDetailBeingProcessed.vue";
import PatientsPage from "@/view/PatientsPage.vue";
import PatientsDetailDoctor from "@/view/PatientsDetailDoctor.vue";
import AddPatient from "@/view/AddPatient.vue";
import AddArticle from "@/view/AddArticle.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomePageView,
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/dashboardDoctor",
    name: "DashboardPageDoctor",
    component: DashboardPageDoctor,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/hero",
    name: "HeroSection",
    component: HeroSection,
  },
  {
    path: "/service",
    name: "MyService",
    component: MyService,
  },
  {
    path: "/HowItWorks",
    name: "HowItWorks",
    component: HowItWorks,
  },
  {
    path: "/WhyUs",
    name: "WhyUs",
    component: WhyUs,
  },
  {
    path: "/articles",
    name: "ArticlesPage",
    component: ArticlesPage,
  },
  {
    path: "/AboutUsPage",
    name: "AboutUsPage",
    component: AboutUsPage,
  },
  {
    path: "/myhistory",
    name: "MyHistoryPage",
    component: MyHistoryPage,
  },
  {
    path: "/PatientDetailTestCompleted",
    name: "PatientDetailTestCompleted",
    component: PatientDetailTestCompleted,
  },
  {
    path: "/PatientDetailBeingProcessed",
    name: "PatientDetailBeingProcessed",
    component: PatientDetailBeingProcessed,
  },
  {
    path: "/morearticle",
    name: "ArticlesPageView",
    component: ArticlesPageView,
  },
  {
    path: "/morearticledoctor",
    name: "ArticlesPageViewDoctor",
    component: ArticlesPageViewDoctor,
  },
  {
    path: "/detailarticle",
    name: "DetailArticlePage",
    component: DetailArticlePage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/patients",
    name: "PatientsPage",
    component: PatientsPage,
  },
  {
    path: "/PatientsDetailDoctor",
    name: "PatientsDetailDoctor",
    component: PatientsDetailDoctor,
  },
  {
    path: "/AddPatient",
    name: "AddPatient",
    component: AddPatient,
  },
  {
    path: "/AddArticle",
    name: "AddArticle",
    component: AddArticle,
  },
  {
    path: "/FooterSite",
    name: "FooterSite",
    component: FooterSite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
