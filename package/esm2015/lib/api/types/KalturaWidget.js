/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaWidgetSecurityType } from './KalturaWidgetSecurityType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaWidgetArgs() { }
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.sourceWidgetId;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.uiConfId;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.securityType;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.securityPolicy;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.enforceEntitlement;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.privacyContext;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.addEmbedHtml5Support;
/** @type {?|undefined} */
KalturaWidgetArgs.prototype.roles;
export class KalturaWidget extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidget' },
            id: { type: 's', readOnly: true },
            sourceWidgetId: { type: 's' },
            rootWidgetId: { type: 's', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            entryId: { type: 's' },
            uiConfId: { type: 'n' },
            securityType: { type: 'en', subTypeConstructor: KalturaWidgetSecurityType, subType: 'KalturaWidgetSecurityType' },
            securityPolicy: { type: 'n' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerData: { type: 's' },
            widgetHTML: { type: 's', readOnly: true },
            enforceEntitlement: { type: 'b' },
            privacyContext: { type: 's' },
            addEmbedHtml5Support: { type: 'b' },
            roles: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWidget.prototype.id;
    /** @type {?} */
    KalturaWidget.prototype.sourceWidgetId;
    /** @type {?} */
    KalturaWidget.prototype.rootWidgetId;
    /** @type {?} */
    KalturaWidget.prototype.partnerId;
    /** @type {?} */
    KalturaWidget.prototype.entryId;
    /** @type {?} */
    KalturaWidget.prototype.uiConfId;
    /** @type {?} */
    KalturaWidget.prototype.securityType;
    /** @type {?} */
    KalturaWidget.prototype.securityPolicy;
    /** @type {?} */
    KalturaWidget.prototype.createdAt;
    /** @type {?} */
    KalturaWidget.prototype.updatedAt;
    /** @type {?} */
    KalturaWidget.prototype.partnerData;
    /** @type {?} */
    KalturaWidget.prototype.widgetHTML;
    /** @type {?} */
    KalturaWidget.prototype.enforceEntitlement;
    /** @type {?} */
    KalturaWidget.prototype.privacyContext;
    /** @type {?} */
    KalturaWidget.prototype.addEmbedHtml5Support;
    /** @type {?} */
    KalturaWidget.prototype.roles;
}
typesMappingStorage['KalturaWidget'] = KalturaWidget;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsTUFBTSxvQkFBcUIsU0FBUSxpQkFBaUI7Ozs7SUFtQmhELFlBQVksSUFBeUI7UUFFakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNySCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDNUMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFXaWRnZXRTZWN1cml0eVR5cGUgfSBmcm9tICcuL0thbHR1cmFXaWRnZXRTZWN1cml0eVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXaWRnZXRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgc291cmNlV2lkZ2V0SWQ/IDogc3RyaW5nO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcblx0dWlDb25mSWQ/IDogbnVtYmVyO1xuXHRzZWN1cml0eVR5cGU/IDogS2FsdHVyYVdpZGdldFNlY3VyaXR5VHlwZTtcblx0c2VjdXJpdHlQb2xpY3k/IDogbnVtYmVyO1xuXHRwYXJ0bmVyRGF0YT8gOiBzdHJpbmc7XG5cdGVuZm9yY2VFbnRpdGxlbWVudD8gOiBib29sZWFuO1xuXHRwcml2YWN5Q29udGV4dD8gOiBzdHJpbmc7XG5cdGFkZEVtYmVkSHRtbDVTdXBwb3J0PyA6IGJvb2xlYW47XG5cdHJvbGVzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdpZGdldCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRzb3VyY2VXaWRnZXRJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcm9vdFdpZGdldElkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHVpQ29uZklkIDogbnVtYmVyO1xuXHRzZWN1cml0eVR5cGUgOiBLYWx0dXJhV2lkZ2V0U2VjdXJpdHlUeXBlO1xuXHRzZWN1cml0eVBvbGljeSA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cGFydG5lckRhdGEgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHdpZGdldEhUTUwgOiBzdHJpbmc7XG5cdGVuZm9yY2VFbnRpdGxlbWVudCA6IGJvb2xlYW47XG5cdHByaXZhY3lDb250ZXh0IDogc3RyaW5nO1xuXHRhZGRFbWJlZEh0bWw1U3VwcG9ydCA6IGJvb2xlYW47XG5cdHJvbGVzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2lkZ2V0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFXaWRnZXQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c291cmNlV2lkZ2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9vdFdpZGdldElkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1aUNvbmZJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZWN1cml0eVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhV2lkZ2V0U2VjdXJpdHlUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFXaWRnZXRTZWN1cml0eVR5cGUnIH0sXG5cdFx0XHRcdHNlY3VyaXR5UG9saWN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdpZGdldEhUTUwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlbmZvcmNlRW50aXRsZW1lbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWRkRW1iZWRIdG1sNVN1cHBvcnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cm9sZXMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVdpZGdldCddID0gS2FsdHVyYVdpZGdldDsiXX0=