/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaControlPanelCommandBaseFilter extends KalturaFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQm5FLE1BQU0sMkNBQTRDLFNBQVEsYUFBYTs7OztJQWNuRSxZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDNUgsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUM5SSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ2xJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQnlJZEVxdWFsPyA6IG51bWJlcjtcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0dGFyZ2V0VHlwZUVxdWFsPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZTtcblx0dGFyZ2V0VHlwZUluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQnlJZEVxdWFsIDogbnVtYmVyO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0dGFyZ2V0VHlwZUVxdWFsIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlO1xuXHR0YXJnZXRUeXBlSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQnlJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUnIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YXJnZXRUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlJyB9LFxuXHRcdFx0XHR0YXJnZXRUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEJhc2VGaWx0ZXI7Il19