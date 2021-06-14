import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Action, DEFUALT_REVENUE_ADJUSTMENT_ITEM, RevenueAdjustment, RevenueAdjustmentActionType, RevenueAdjustmentsItem } from './main-page/constants';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'catgle-angular';
  isNewRevenueActive: boolean = false;
  defaultNewRevenueItem = DEFUALT_REVENUE_ADJUSTMENT_ITEM;
  revenueItems: RevenueAdjustment[];

  constructor(public searchService: SearchService) {
    searchService.loadTaxonomy();
    searchService.loadRevenueAdjustments();
  }

  ngOnDestroy() { }

  ngOnInit() {
    this.searchService.revenueItems$.subscribe((value) => {
      this.revenueItems = value;
    });
  }

  handleRevenueAdjustmentsActions($event: Action) {
    switch ($event.type) {
      case RevenueAdjustmentActionType.delete: {
        if ($event.isCopied) {
          const selectedRevenueIndex = this.revenueItems.findIndex((item) => item === $event.item);
          this.revenueItems.splice(selectedRevenueIndex, 1);
        } else if ($event.isNew) {
          this.isNewRevenueActive = false;
        } else {
          const selectedRevenueIndex = this.revenueItems.findIndex((item) => item.id === $event.id);
          this.revenueItems.splice(selectedRevenueIndex, 1);
        }
        break;
      }
      case RevenueAdjustmentActionType.copy: {
        const copyItem: RevenueAdjustment = {
          id: null,
          businessCode: $event.item.businessCode,
          businessAreaCode: $event.item.businessAreaCode,
          businessLineCode: $event.item.businessLineCode,
          impactValue: $event.item.impactValue,
          totalValue: $event.item.totalValue,
          adjustmentValue: $event.item.adjustmentValue,
          incurredValue: $event.item.incurredValue,
        };
        this.addNewRevenueAdjustmentItem(copyItem);
        break;
      }
      case RevenueAdjustmentActionType.save: {
        if ($event.id) {
          const selectedRevenueIndex = this.revenueItems.findIndex((item) => item.id === $event.id);
          this.revenueItems[selectedRevenueIndex] = $event.updatedItem;
        }
        if ($event.isCopied) {
          const selectedRevenueIndex = this.revenueItems.findIndex((item) => item === $event.item);
          this.revenueItems[selectedRevenueIndex] = $event.updatedItem;
        }
        if ($event.isNew) {
          this.isNewRevenueActive = false;
          const newItem: RevenueAdjustment = $event.updatedItem;
          this.addNewRevenueAdjustmentItem(newItem);
        }
        break;
      }
    }
  }

  checkRevenueCopyStatus(item: RevenueAdjustment) {
    if (item.id) {
      return false;
    }
    const keys = Object.keys(item);

    return keys.some((key) => {
      return item[key];
    });
  }

  addNewRevenueAdjustmentItem(copyItem?: RevenueAdjustment) {
    if (copyItem) {
      this.revenueItems.push(copyItem);
    } else {
      this.isNewRevenueActive = true;
    }
  }

  saveForm() {
    this.searchService.updateAll(this.revenueItems);
  }

}
