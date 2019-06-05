/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaControlPanelCommandBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.createdByIdEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.targetTypeEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.targetTypeIn;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaControlPanelCommandBaseFilterArgs.prototype.statusIn;
var KalturaControlPanelCommandBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaControlPanelCommandBaseFilter, _super);
    function KalturaControlPanelCommandBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaControlPanelCommandBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaControlPanelCommandBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            createdByIdEqual: { type: 'n' },
            typeEqual: { type: 'en', subTypeConstructor: KalturaControlPanelCommandType, subType: 'KalturaControlPanelCommandType' },
            typeIn: { type: 's' },
            targetTypeEqual: { type: 'en', subTypeConstructor: KalturaControlPanelCommandTargetType, subType: 'KalturaControlPanelCommandTargetType' },
            targetTypeIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaControlPanelCommandStatus, subType: 'KalturaControlPanelCommandStatus' },
            statusIn: { type: 's' }
        });
        return result;
    };
    return KalturaControlPanelCommandBaseFilter;
}(KalturaFilter));
export { KalturaControlPanelCommandBaseFilter };
if (false) {
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.createdByIdEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.targetTypeEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.targetTypeIn;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaControlPanelCommandBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaControlPanelCommandBaseFilter'] = KalturaControlPanelCommandBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJuRSxJQUFBO0lBQTBELGdFQUFhO0lBY25FLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzVILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDOUksWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNsSSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBOURMO0VBc0IwRCxhQUFhLEVBeUN0RSxDQUFBO0FBekNELGdEQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEJ5SWRFcXVhbD8gOiBudW1iZXI7XG5cdHR5cGVFcXVhbD8gOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGU7XG5cdHR5cGVJbj8gOiBzdHJpbmc7XG5cdHRhcmdldFR5cGVFcXVhbD8gOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGU7XG5cdHRhcmdldFR5cGVJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEJ5SWRFcXVhbCA6IG51bWJlcjtcblx0dHlwZUVxdWFsIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdHRhcmdldFR5cGVFcXVhbCA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZTtcblx0dGFyZ2V0VHlwZUluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEJ5SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlJyB9LFxuXHRcdFx0XHR0eXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFyZ2V0VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZScgfSxcblx0XHRcdFx0dGFyZ2V0VHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQmFzZUZpbHRlciddID0gS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyOyJdfQ==