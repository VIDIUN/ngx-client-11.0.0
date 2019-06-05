/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaWidget = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidget, _super);
    function KalturaWidget(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidget.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaWidget;
}(KalturaObjectBase));
export { KalturaWidget };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmxGLElBQUE7SUFBbUMseUNBQWlCO0lBbUJoRCx1QkFBWSxJQUF5QjtlQUVqQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNySCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDNUMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dCQXJFTDtFQW1CbUMsaUJBQWlCLEVBbURuRCxDQUFBO0FBbkRELHlCQW1EQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVdpZGdldFNlY3VyaXR5VHlwZSB9IGZyb20gJy4vS2FsdHVyYVdpZGdldFNlY3VyaXR5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdpZGdldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBzb3VyY2VXaWRnZXRJZD8gOiBzdHJpbmc7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR1aUNvbmZJZD8gOiBudW1iZXI7XG5cdHNlY3VyaXR5VHlwZT8gOiBLYWx0dXJhV2lkZ2V0U2VjdXJpdHlUeXBlO1xuXHRzZWN1cml0eVBvbGljeT8gOiBudW1iZXI7XG5cdHBhcnRuZXJEYXRhPyA6IHN0cmluZztcblx0ZW5mb3JjZUVudGl0bGVtZW50PyA6IGJvb2xlYW47XG5cdHByaXZhY3lDb250ZXh0PyA6IHN0cmluZztcblx0YWRkRW1iZWRIdG1sNVN1cHBvcnQ/IDogYm9vbGVhbjtcblx0cm9sZXM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2lkZ2V0IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdHNvdXJjZVdpZGdldElkIDogc3RyaW5nO1xuXHRyZWFkb25seSByb290V2lkZ2V0SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0dWlDb25mSWQgOiBudW1iZXI7XG5cdHNlY3VyaXR5VHlwZSA6IEthbHR1cmFXaWRnZXRTZWN1cml0eVR5cGU7XG5cdHNlY3VyaXR5UG9saWN5IDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0cmVhZG9ubHkgd2lkZ2V0SFRNTCA6IHN0cmluZztcblx0ZW5mb3JjZUVudGl0bGVtZW50IDogYm9vbGVhbjtcblx0cHJpdmFjeUNvbnRleHQgOiBzdHJpbmc7XG5cdGFkZEVtYmVkSHRtbDVTdXBwb3J0IDogYm9vbGVhbjtcblx0cm9sZXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRnZXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdpZGdldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzb3VyY2VXaWRnZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb290V2lkZ2V0SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVpQ29uZklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlY3VyaXR5VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFXaWRnZXRTZWN1cml0eVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVdpZGdldFNlY3VyaXR5VHlwZScgfSxcblx0XHRcdFx0c2VjdXJpdHlQb2xpY3kgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2lkZ2V0SFRNTCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVuZm9yY2VFbnRpdGxlbWVudCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRwcml2YWN5Q29udGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZGRFbWJlZEh0bWw1U3VwcG9ydCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRyb2xlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2lkZ2V0J10gPSBLYWx0dXJhV2lkZ2V0OyJdfQ==